<template>
  <div class="chat-container">
    <div class="symbol"></div>
    <div class="chat-messages" ref="chatMessagesRef">
      <div
          v-for="(message, index) in chatMessages"
          :key="index"
          :class="{ 'user-message': message.role === 'user', 'ai-message': message.role === 'ai' }"
      >
        <div class="avatar" :style="{ backgroundImage: `url(${message.role === 'user'? userAvatar : aiAvatar})` }"></div>
        <div class="message-content-wrapper">
          <div class="message-content">
            {{ message.content }}
          </div>
        </div>
      </div>
    </div>
    <div class="chat-input">
      <input v-model="input" placeholder="请输入问题" @keyup.enter="sendChatRequest(currentConversationId ?? '')" class="search">
      <el-icon @click="sendChatRequest(currentConversationId ?? '')" :size="30"><Position /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import {Position} from "@element-plus/icons-vue";
import aiAvatarImg from '@/assets/images/aiavator.png';
import emitter from '@/utils/emitter.ts';
import { CozeAPI, ChatEventType, RoleType, COZE_CN_BASE_URL } from '@coze/api';

const input = ref('');
const chatMessages = ref<{ role: 'user' | 'ai'; content: string }[]>([]);
const chatMessagesRef = ref<HTMLDivElement | null>(null);
const currentConversationId = ref<string | null>(null);

// 定义用户和 AI 的头像地址
const userAvatar = 'https://example.com/user-avatar.png'; // 替换为实际的用户头像地址
const aiAvatar = aiAvatarImg; // 替换为实际的 AI 头像地址

// 定义 token
const token = 'pat_61vQguWkC0iXUADJUvHrv7lUa3MVCngW7aKMVBw2Gaa54Aicx1Aakb9SdVSH3aYg';
const botId = '7467544627365773351';

// 滚动到聊天窗口底部的函数
const scrollToBottom = () => {
  if (chatMessagesRef.value) {
    chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight;
  }
};

// 初始化 CozeAPI 客户端
const client = new CozeAPI({
  token,
  baseURL: COZE_CN_BASE_URL,
  allowPersonalAccessTokenInBrowser: true
});

// 从本地存储加载聊天记录
const loadChatMessagesFromLocalStorage = () => {
  const storedChatMessages = localStorage.getItem('chatMessages');
  if (storedChatMessages) {
    chatMessages.value = JSON.parse(storedChatMessages);
  }
};

// 将聊天记录保存到本地存储
const saveChatMessagesToLocalStorage = () => {
  localStorage.setItem('chatMessages', JSON.stringify(chatMessages.value));
};

// 发送聊天请求的函数
const sendChatRequest = async (conversationId: string) => {
  if (input.value.trim() === '') return;

  // 添加用户消息到聊天记录
  const userMessage = {
    role: 'user',
    content: input.value
  };
  chatMessages.value.push(userMessage);
  scrollToBottom();
  saveChatMessagesToLocalStorage();
  console.log(conversationId);

  try {
    const stream = await client.chat.stream({
      bot_id: botId,
      user_id: '123',
      stream: true,
      auto_save_history: true,
      conversation_id: conversationId,

      additional_messages: [
        {
          role: RoleType.User,
          type: 'question',
          content: input.value,
          content_type: 'text'
        }
      ]
    });

    let aiMessageContent = '';
    for await (const part of stream) {
      if (part.event === ChatEventType.CONVERSATION_MESSAGE_DELTA) {
        const message = part.data.message || part.data.content;
        aiMessageContent += message;
        // 更新 AI 消息内容
        if (chatMessages.value.length > 0 && chatMessages.value[chatMessages.value.length - 1].role === 'ai') {
          chatMessages.value[chatMessages.value.length - 1].content = aiMessageContent;
        } else {
          const aiMessage = {
            role: 'ai',
            content: aiMessageContent
          };
          chatMessages.value.push(aiMessage);
        }
        scrollToBottom();
        saveChatMessagesToLocalStorage();
      } else if (part.event === ChatEventType.CONVERSATION_MESSAGE_COMPLETED) {
        console.log('完整回复:', aiMessageContent);
      } else if (part.event === ChatEventType.CONVERSATION_CHAT_FAILED) {
        console.error('对话失败:', part.data);
        const errorMessage = {
          role: 'ai',
          content: '对话失败，请稍后重试。'
        };
        chatMessages.value.push(errorMessage);
        scrollToBottom();
        saveChatMessagesToLocalStorage();
      }
    }
  } catch (error) {
    console.error('请求出错:', error);
    const errorMessage = {
      role: 'ai',
      content: '请求出错，请稍后重试。'
    };
    chatMessages.value.push(errorMessage);
    scrollToBottom();
    saveChatMessagesToLocalStorage();
  } finally {
    input.value = ''; // 清空输入框
  }
};

// 新会话处理函数
const createNewConversation = () => {
  // 清空聊天记录
  chatMessages.value = [];
  // 滚动到聊天窗口底部
  scrollToBottom();
  saveChatMessagesToLocalStorage();
};

onMounted(() => {
  scrollToBottom();
  loadChatMessagesFromLocalStorage();
  // 监听 send-id 事件
  const onSendId = (conversationId: string) => {
    console.log('接收到的 Conversation ID:', conversationId);
    currentConversationId.value = conversationId;
    // 调用发送聊天请求的函数
    sendChatRequest(conversationId);
  };
  emitter.on('send-id', onSendId);
  // 监听创建新会话事件
  emitter.on('create-new-conversation', createNewConversation);

  // 组件卸载时移除监听器
  onUnmounted(() => {
    emitter.off('send-id', onSendId);
    emitter.off('create-new-conversation', createNewConversation);
  });
});
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 800px;
  width:1100px;
  overflow: hidden;
}

.chat-messages {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  /*auto 表示当内容超出元素的高度时，会自动显示垂直滚动条*/
}

.ai-message {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.user-message {
  justify-content: flex-end;
}

.ai-message {
  justify-content: flex-start;
}

.avatar {
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-right: 10px;
}

.user-message.avatar {
  margin-left: 10px;
  margin-right: 0;
}


.user-message.message-content-wrapper {
  display: flex;
  justify-content: flex-end;
}

.message-content {
  padding: 8px;
  border-radius: 8px;
}

.user-message.message-content {
  background-color: #f0f0f0;
}

.search{
  width:700px;
  height:70px;
}

.chat-input {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  padding: 10px;
}

.chat-input input {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-right: 10px;
  max-width: 700px; /* 输入框最大宽度 */
}

.chat-input button {
  padding: 5px 10px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.chat-input button:hover {
  background-color: #40a9ff;
}
</style>
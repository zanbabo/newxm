<template>
  <div class="container">
    <div class="edit">
      <ul>
        <li v-for="conversationId of conversationIds" :key="conversationId">
          <span>会话ID: {{ conversationId }} </span>
          <div class="action-buttons">
            <el-button round plain @click="queryConversation(conversationId)">查询</el-button>
            <el-icon class="delete" @click="deleteConversation(conversationId)"><Delete /></el-icon>
          </div>
        </li>
      </ul>
      <div v-if="messageHistory.length > 0">
        <h3>消息历史记录 - 会话 ID: {{ currentConversationId }}</h3>
        <ul>
          <li v-for="(message, index) in messageHistory" :key="index">
            <span v-if="message.role === 'user'">用户: {{ message.content }}</span>
            <span v-else-if="message.role === 'assistant'">AI: {{ message.content }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useConversationStore } from '@/stores/conversationStore';
import { Delete } from "@element-plus/icons-vue";
import axios from 'axios';

const conversationStore = useConversationStore();
const conversationIds = conversationStore.conversationIds;
const currentConversationId = ref<string>('');
const messageHistory = ref<any[]>([]);

const token = 'pat_61vQguWkC0iXUADJUvHrv7lUa3MVCngW7aKMVBw2Gaa54Aicx1Aakb9SdVSH3aYg';
const botId = '7467544627365773351';

const deleteConversation = (conversationId: string) => {
  conversationStore.deleteConversationFromHistory(conversationId);
};

const queryConversation = async (conversationId: string) => {
  try {
    console.log('开始查询会话消息，会话ID:', conversationId);
    const apiUrl = `https://api.coze.cn/v1/conversation/message/list?conversation_id=${conversationId}`;

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    const body = {
      order: 'desc',
      limit: 50

    };

    console.log('请求URL:', apiUrl);
    console.log('请求头:', headers);
    console.log('请求体:', body);

    const response = await axios.post(apiUrl, body, { headers });

    console.log('请求响应:', response.data);

    if (response.data.code === 0) {
      currentConversationId.value = conversationId;
      messageHistory.value = response.data.data;
      console.log('消息历史记录更新成功，消息数量:', messageHistory.value.length);
    } else {
      console.error('查询消息历史记录时出错，错误信息:', response.data.msg);
    }
  } catch (error) {
    console.error('查询消息历史记录时出现异常:', error);
  }
};
</script>

<style scoped>
.delete {
  color: gray;
  justify-content: flex-end;
}

.delete:hover {
  color: #c37373;
}

.container {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.edit {
  width: 1000px;
  position: absolute;
  top: 50px;
  left: 55px;
  height: 750px;
  overflow-y: auto;
}

.edit ul {
  list-style-type: none;
  padding: 0;
}

.edit li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  gap: 10px;
  padding: 0 25px;
  border-radius: 15px;
  line-height: 60px;
  font-size: 17px;
  cursor: pointer;
  margin-bottom: 15px;
  background-color: #F5F7F9;
}

.edit li:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.edit el-button {
  justify-content: flex-end;
}

.action-buttons {
  gap: 10px;
  display: flex;
  align-items: center;
}
</style>
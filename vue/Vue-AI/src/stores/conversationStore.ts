// src/stores/conversationStore.ts
import { defineStore } from 'pinia';

export const useConversationStore = defineStore('conversation', {
    state: () => ({
        // 将 conversationId 改为 conversationIds 数组，用于存储多个 conversationId
        conversationIds: [] as string[]
    }),
    actions: {
        setConversationId(id: string) {
            // 使用数组的 push 方法将传入的 id 添加到 conversationIds 数组中
            this.conversationIds.push(id);
        },
        deleteConversationFromHistory(conversationId: string) {
            if (this.conversationIds.length === 0) {
                console.log('会话 ID 数组为空，无法删除');
                return;
            }
            const index = this.conversationIds.findIndex((id) => id === conversationId);
            if (index!== -1) {
                this.conversationIds.splice(index, 1);
                console.log(`删除会话: ${conversationId}`);
            } else {
                console.log(`未找到会话 ID: ${conversationId}`);
            }
        }
    }
});
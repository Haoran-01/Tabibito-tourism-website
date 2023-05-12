<template>
  <div class="chatbox">
    <div class="conversation">
      <div class="message" v-for="(item, index) in messages" :key="index" :class="{'sent': item.type === 'sent', 'received': item.type === 'received'}">
        <div class="message-content">{{ item.content }}</div>
      </div>
      <div ref="scroll" class="scroll"></div>
    </div>
    <div class="input-box">
      <input type="text" class="input" v-model="inputText" @keydown.enter="send" placeholder="请输入...">
      <button class="send" @click="send">发送</button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import { Configuration, OpenAIApi } from "openai";
export default defineComponent( {
  name: "gptChatView",
  data() {
    return {
      inputText: '',
      messages: []
    }
  },
  methods: {
    async send() {
      if (this.inputText) {
        // Add user message to messages array
        this.messages.push({
          type: 'sent',
          content: this.inputText
        });
        // Get GPT response
        const response = await this.getGptResponse(this.inputText);

        // Add GPT response to messages array
        this.messages.push({
          type: "received",
          content: response
        });

        // Clear input field and scroll to bottom
        this.inputText = '';
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }
    },
    scrollToBottom() {
      this.$refs.scroll.scrollIntoView({ behavior: 'smooth' });
    },
    async getGptResponse(input) {
      const configuration = new Configuration({organization:'org-5G552HZLY5U5TjhiPL7eJkQy',
        apiKey: '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'
      });
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createCompletion({
        engine: "gpt-3.5-turbo",
        prompt: input,
        maxTokens: 64,
        n: 1,
        stop: "\n",
        temperature: 0.5
      });

      return completion.data.choices[0].text.trim();
    }
  }
})
</script>

<style scoped>
.chatbox {
  background-color: #DFEFF7;
  border: 1px solid #B2D0E5;
  border-radius: 5px;
  width: 320px;
  height: 500px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
}

.conversation {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.message {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
}

.message-content {
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  max-width: 200px;
  word-wrap: break-word;
}

.sent .message-content {
  background-color: #F8F8F8;
  align-self: flex-end;
}

.received .message-content {
  background-color: #E3EEFF;
  align-self: flex-start;
}

.input-box {
  display: flex;
  align-items: center;
  padding: 10px;
}

.input {
  border: none;
  border-radius: 20px;
  padding: 10px;
  flex: 1;
  margin-right: 10px;
  background-color: #F2F6FA;
}

.send {
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: #4B7BFF;
  color: white;
  cursor: pointer;
}

</style>
<template>
    <div>
        <Button v-if="isInstallVisible" @click="handleInstallClick" :disabled="isInstallDisabled">
            安装应用
        </Button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 响应式状态管理
const isInstallVisible = ref(false);
const isInstallDisabled = ref(false);
let installEvent: any | null = null;

// 安装后的处理逻辑
const onInstall = () => {
    isInstallDisabled.value = true; // 禁用安装按钮
    installEvent = null; // 清除缓存的事件
    console.log('应用已安装');
};

// 点击按钮触发安装
const handleInstallClick = async () => {
    if (!installEvent) return; // 确保事件已缓存

    try {
        await installEvent.prompt(); // 主动弹出安装提示
        const { outcome } = await installEvent.userChoice;

        if (outcome === 'accepted') {
            onInstall(); // 用户接受安装
        } else {
            console.log('用户取消了安装');
        }
    } catch (error) {
        console.error('安装失败:', error);
    }
};

// 监听 beforeinstallprompt 事件
const handleBeforeInstallPrompt = (event: any) => {
    console.log('触发 beforeinstallprompt 事件');
    event.preventDefault(); // 阻止默认的安装提示
    installEvent = event; // 缓存事件
    isInstallVisible.value = true; // 显示安装按钮
};

// 注册和卸载事件监听器
onMounted(() => {
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', onInstall); // 监听应用已安装事件
});

onBeforeUnmount(() => {
    window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.removeEventListener('appinstalled', onInstall);
});
</script>

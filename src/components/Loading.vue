<template lang="pug">
.loading
    .line
    .line
    .line
</template>

<style scoped land="less">
.loading {
    text-align: center;
    padding: 2rem 0;
}
.line {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 5px;
    border-radius: 15px;
    background-color: #061741;

    &:first-child {
        animation: loadingC 0.6s 0.1s linear infinite;
    }
    &:nth-child(2) {
        animation: loadingC 0.6s 0.2s linear infinite;
    }
    &:last-child {
        margin-right: 0;
        animation: loadingC 0.6s 0.3s linear infinite;
    }
}

@keyframes loadingC {
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(0, 15px);
    }
    100% {
        transform: translate(0, 0);
    }
}
</style>
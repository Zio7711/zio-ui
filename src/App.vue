<template>
  <div id="app">
    <Button class="button">默认按钮</Button>
    <Button type="primary" class="button">主要按钮</Button>
    <Button type="success" class="button">成功按钮</Button>
    <Button type="warning" class="button">警告按钮</Button>
    <Button type="danger" class="button">危险按钮</Button>
    <Button type="info" class="button">信息按钮</Button>
    <template slot="code">
      使用type、plain 和 round 属性来定义 Button 的样式。
      <pre><code>{{ basicCode  }}</code></pre>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data() {
      return {
        basicCode: `
                <Button>默认按钮</Button>
                <Button type="primary">主要按钮</Button>
                <Button type="success">成功按钮</Button>
                <Button type="warning">警告按钮</Button>
                <Button type="danger">危险按钮</Button>
                <Button type="info">信息按钮</Button>

                <Button plain>默认按钮</Button>
                <Button type="primary" plain>主要按钮</Button>
                <Button type="success" plain>成功按钮</Button>
                <Button type="warning" plain>警告按钮</Button>
                <Button type="danger" plain>危险按钮</Button>
                <Button type="info" plain>信息按钮</Button>

                <Button round>默认按钮</Button>
                <Button type="primary" round>主要按钮</Button>
                <Button type="success" round>成功按钮</Button>
                <Button type="warning" round>警告按钮</Button>
                <Button type="danger" round>危险按钮</Button>
                <Button type="info" round>信息按钮</Button>
            `
          .replace(/^ {16}/gm, '')
          .trim(),
      };
    },
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .button {
    margin-left: 0.5em;
    &:first-of-type {
      margin-left: 0;
    }
  }
</style>

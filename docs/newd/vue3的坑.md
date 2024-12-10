<!--
 * @Author: yoboom 1369276645@qq.com
 * @Date: 2024-12-10 17:07:27
 * @LastEditors: yoboom 1369276645@qq.com
 * @LastEditTime: 2024-12-10 17:07:30
 * @FilePath: \study\docs\newd\vue3的坑.md
 * @Description: 
 * 
-->
在使用setup过程中，父组件定义的事件，子组件拿不到
由于vue3将$listeners删除，并且合并到$attrs中，父组件定义的自定义事件，需要在$attrs中获取。正常情况下是可以通过$attrs.onXXX获取到，但vue3要求所有的自定义事件需要手动的通过emit选项声明，子组件一旦通过emit:['xxx']声明了事件以后，$attrs.onXXX就拿不到这个事件了，不声明emit控制台会有提示，但声明以后就拿不到，这就很奇怪，所以书写组件时如果需要获取这个事件干些事情就不要声明这个事件。



setup中使用await会导致页面白屏问题
因为组件是需要拿到setup的返回值才进行渲染的，但setup中有await导致组件变成了异步组件，组件迟迟拿不到返回值就渲染失败了。

解决方案：

1.vue3推出了suspense组件用于渲染异步组件

2.在onMounted中使用异步函数或者不使用await

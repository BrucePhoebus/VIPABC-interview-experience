/* 
  拓展 VuePress 应用
*/
export default ({ router }) => {
  // 可以进行路由拦截
  router.beforeEach((to, from, next) => {
    next();
  })
}
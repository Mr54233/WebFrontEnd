<!-- <script>
export default {
  setup() {
    // console.log('this.setup')
    // 一上来就执行,在beforeCreate之前
    const message = 'hello world'
    const logMessage = () => {
      console.log(message)
    }
    return{
      message,
      logMessage
    }
  },
  // beforeCreate() {
  //   console.log('this.beforeCreate')
  // },
}
</script> -->

<!-- <script setup> // 语法糖
const message = "hello world";
const logMessage = () => {
  console.log(message);
};
</script>


<template>
  <div>
    {{ message }}
    <button @click="logMessage">logMessage</button>
  </div>
</template> -->

<!-- ------ -->


<!-- <script setup>
// 1. 导入函数
// import {reactive}  from "vue"

// // 2. 执行函数 传入一个对象类型的参数 变量接收
// const state = reactive({
//   count:0
// })

// const setCount = ()=>{
//   state.count++
// }

// 1. 导入ref
import {ref}  from "vue"
// 2. 执行函数 传入一个简单类型或者对象类型的参数 变量接收
const count = ref(0)

const setCount = ()=>{
  // 脚本区域修改ref产生的响应式对象数据 必须通过.value属性
  count.value++
}
</script>

<template>
  <div>
    {{ state.count }}
    <button @click="state.count++">+1</button>
    <button @click="setCount">{{ count }}</button>
  </div>
</template> -->

<script setup>
// 原始响应式数组
import {ref} from "vue"
const list = ref([1,2,3,4,5,6,7,8])

// 导入computed函数
import {computed} from "vue"
// 执行computed函数 return计算之后的值 变量接收
const computedList = computed(()=>{
  return list.value.filter(item=>item>2)
})

setTimeout(() => {
  list.value.push(9,10)
}, 3000);

</script>

<template>
  <div>
    {{ list }}
  </div>
  <div>
    {{ computedList }}
  </div>
</template>

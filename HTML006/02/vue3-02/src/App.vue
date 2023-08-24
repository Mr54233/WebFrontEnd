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


<!-- <script setup> // 响应式数据
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

<!-- ------------------- -->

<!-- <script setup>  // 计算属性
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
</template> -->

<!-- -------------------------- -->

<!-- <script setup> // 监听属性
import {ref,watch} from "vue"
const count = ref(0)
const setCount = ()=>{
  count.value++
}

//   watch监听单个数据源
//  ref对象不需要加.value
watch(count,(newVal,oldVal)=>{
  console.log('count发生了变化',newVal,oldVal)
})


</script>


<template>
  <div>
    <button @click="setCount">+{{ count }}</button>
  </div>
</template> -->

<!-- ------------ -->

<!-- <script setup> // 监听多个数据源
import {watch,ref} from 'vue'
const count = ref(0)
const name = ref("张三")

const changeName = ()=>{
  name.value = "李四"
}
const changeCount = ()=>{
  count.value++
}

// 监听多个数据
watch([count,name],
      ([newCount,newName],[oldCount,oldName])=>{
  console.log("新值"+newCount,newName,"老值"+oldCount,oldName)
})
</script>

<template>
  <div>
    <button @click="changeCount">修改count--{{ count }}</button>
  </div>
  <div>
    <button @click="changeName">修改name--{{ name }}</button>
  </div>
</template> -->

<!-- ------------  -->

<!-- <script setup>  // 立即执行
  // 1. 导入函数
  import {ref,watch} from "vue"
  const count = ref(0)
  const setCount = ()=>{
    count.value++
  }
  // watch立即执行
  watch(count,(newVal,oldVal)=>{
    console.log('count发生了变化',newVal,oldVal)
  },{
    immediate:true
  })
</script>


<template>
  <div>
    <button @click="setCount">+{{ count }}</button>
  </div>
</template> -->

<!-- -------- -->

<script setup>

</script>

<template>
  <div>
    
  </div>
</template>

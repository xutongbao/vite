import Api from "@/api"
import { useRouter } from "vue-router"
import { reactive, toRefs, onMounted } from "vue"

export default () => {
  const state = reactive({
    username: "admin",
    password: "123456",
    visible: false,
  })
  const router = useRouter()

  const handleVisible = () => {
    state.visible = !state.visible
  }

  const handleLogin = () => {
    const { username, password } = state
    Api.light.login({ username, password }).then((res) => {
      if (res.code === 200) {
        router.push("/light/index/home")
      }
    })
  }

  let usernameRef
  const handleUsernameRef = (el) => {
    usernameRef = el
  }

  onMounted(() => {
    usernameRef.focus()
  })

  return {
    ...toRefs(state),
    handleUsernameRef,
    handleVisible,
    handleLogin,
  }
}

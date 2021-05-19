import Api from "@/api"
import { useRouter } from "vue-router"
import { reactive, toRefs, onMounted } from "vue"
import useTools from '../../../utils/useTools'

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
    const { showLoading, hideLoading } = useTools()
    const { username, password } = state
    showLoading()
    Api.light.login({ username, password }).then((res) => {
      if (res.code === 200) {
        router.push("/light/index/home")
        hideLoading()
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

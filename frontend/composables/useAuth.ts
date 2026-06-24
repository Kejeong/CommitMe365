export const useAuth = () => {
  const config = useRuntimeConfig();
  const user = useState<any | null>('user', () => null);
  const isAuthenticated = computed(() => !!user.value);
  const authCookie = useCookie('is_authenticated');

  const fetchUser = async () => {
    try {
      const data = await $fetch(`${config.public.apiBase}/api/auth/me`, {
        credentials: 'include',
      });
      user.value = data;
      authCookie.value = 'true';
    } catch (error) {
      user.value = null;
      authCookie.value = null;
    }
  };

  const login = async (credentials: { email: string; password: any }) => {
    try {
      await $fetch(`${config.public.apiBase}/api/auth/login`, {
        method: 'POST',
        body: credentials,
        credentials: 'include',
      });
      await fetchUser();
      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.data?.message || '로그인에 실패했습니다.' };
    }
  };

  const signup = async (data: { email: string; password: any; name: string }) => {
    try {
      await $fetch(`${config.public.apiBase}/api/auth/signup`, {
        method: 'POST',
        body: data,
      });
      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.data?.message || '회원가입에 실패했습니다.' };
    }
  };

  const logout = async () => {
    try {
      await $fetch(`${config.public.apiBase}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      user.value = null;
      authCookie.value = null;
      navigateTo('/');
    }
  };

  return {
    user,
    isAuthenticated,
    fetchUser,
    login,
    signup,
    logout,
  };
};

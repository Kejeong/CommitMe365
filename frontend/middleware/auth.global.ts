export default defineNuxtRouteMiddleware(async (to, from) => {
  const { user, fetchUser } = useAuth();
  
  // 서버 사이드에서 유저 정보를 가져오거나, 클라이언트 사이드에서 유저 정보가 없는 경우 시도
  if (!user.value) {
    await fetchUser();
  }

  const is_authenticated = !!user.value;

  // 로그인 페이지('/')와 회원가입 페이지('/signup')는 항상 허용
  if (to.path === '/' || to.path === '/signup') {
    // 이미 로그인된 상태라면 홈으로 이동 (단, 로그아웃 등의 상황을 위해 '/'에서만 체크할 수도 있음)
    if (is_authenticated && to.path === '/') {
      return navigateTo('/home');
    }
    return;
  }

  // 로그인이 되어 있지 않은데 보호된 페이지로 가려고 하면 로그인 페이지로 리다이렉트
  if (!is_authenticated) {
    return navigateTo('/');
  }
});

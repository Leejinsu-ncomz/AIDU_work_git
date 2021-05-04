import Vue from 'vue'
import Router from 'vue-router'
/* import { component } from 'vue/types/umd' */
import Layout from '../views/layout/Layout'
import UserLayout from '../views/layout/UserLayout'
import Empty from '../views/layout/empty'

Vue.use(Router)

const portalHomeRouter = [{
  path: 'main',
  name: 'UserHome',
  title: 'home',
  component: () => import('@/views/project/aiduMain')
}]

const projectRouter = [{
  path: 'project',
  name: 'ProjectDetailLayout',
  title: '나의 프로젝트 레이아웃',
  component: () => import('@/views/project/m2_layout'),
  children: [{
      path: 'list',
      name: 'ProjectList',
      title: '나의 프로젝트',
      component: () => import('@/views/project/m2_01_01_000')
    },
    {
      path: 'detail',
      name: 'ProjectDetailLayout',
      title: '나의 프로젝트',
      component: () => import('@/views/project/m2_02_01_000')
    }
  ]
}]

const aiStudyRouter = [{
  path: 'aiStudy',
  name: 'aiStudyLayout',
  title: 'AI 강좌 레이아웃',
  component: () => import('@/views/aiStudy/m3_layout'),
  children: [{
    path: 'contents',
    name: 'aiStudyContents',
    title: 'AI 교육 컨텐츠',
    component: () => import('@/views/aiStudy/m3_01_01_000')
  }]
}]

const studyRouter = [{
  path: 'study',
  name: 'StudyLayout',
  title: '자가학습서 목록 레이아웃',
  component: () => import('@/views/study/m4_layout'),
  children: [{
      path: 'list',
      name: 'studyList',
      title: '자가학습서 리스트',
      component: () => import('@/views/study/m4_01_01_000')
    },
    {
      path: 'detail',
      name: 'StudyDetail',
      title: '자가학습서 상세',
      component: () => import('@/views/study/m4_01_02_000')
    },
    {
      path: 'edit',
      name: 'StudyEdit',
      title: '자가학습서 등록/수정',
      component: () => import('@/views/study/m4_01_03_000')
    }
  ]
}]

const catalogRouter = [{
  path: 'catalog',
  name: 'catalogLayout',
  title: '공유모델 레이아웃',
  component: () => import('@/views/catalog/m5_layout'),
  children: [{
      path: 'list',
      name: 'catalogList',
      title: '공유모델 목록',
      component: () => import('@/views/catalog/m5_01_01_000')
    },
    {
      path: 'detail',
      name: 'catalogDetail',
      title: '공유모델 상세보기',
      component: () => import('@/views/catalog/m5_02_01_000')
    }
  ]
}]

const boardRouter = [{
  path: 'board',
  name: 'boardLayout',
  title: '게시판',
  component: () => import('@/views/board/m6_layout'),
  children: [{
      path: 'notice/list/',
      name: 'notice',
      title: '공시사항',
      component: () => import('@/views/board/m6_01_01_000')
    },
    {
      path: 'notice/detail/',
      name: 'noticeDetail',
      title: '공지사항 상세보기',
      component: () => import('@/views/board/m6_01_02_000')
    },
    {
      path: 'qna/list/',
      name: 'Q&AList',
      title: 'Q&A',
      component: () => import('@/views/board/m6_02_01_000')
    },
    {
      path: 'qna/detail/',
      name: 'Q&ADetail',
      title: 'Q&A 상세보기',
      component: () => import('@/views/board/m6_02_02_000')
    },
    {
      path: 'qna/edit/',
      name: 'Q&AEdit',
      title: 'Q&A 등록/수정',
      component: () => import('@/views/board/m6_02_03_000')
    },
    {
      path: 'free/list/',
      name: 'freeList',
      title: '자유게시판',
      component: () => import('@/views/board/m6_03_01_000')
    },
    {
      path: 'free/detail/',
      name: 'freeDetail',
      title: '자유게시판 상세보기',
      component: () => import('@/views/board/m6_03_02_000')
    },
    {
      path: 'free/edit/',
      name: 'freeEdit',
      title: '자유게시판 등록/수정',
      component: () => import('@/views/board/m6_03_03_000')
    }
  ]
}]



const join = [{
  path: 'term',
  name: 'UserTerm',
  title: '약관동의',
  component: () => import('@/views/user/m1_01_01_000')
}, {
  path: 'join',
  name: 'UserJoin',
  title: '회원가입 선택',
  component: () => import('@/views/user/m1_01_02_001')
}, {
  path: 'joinForm',
  name: 'UserJoin',
  title: '회원가입 선택',
  component: () => import('@/views/user/m1_01_02_002')
}, {
  path: 'joinComplete',
  name: 'UserJoinComplete',
  title: '회원가입 완료',
  component: () => import('@/views/user/m1_01_03_000')
}, {
  path: 'emailComplete',
  name: 'UserEmailComplete',
  title: '이메일 인증 완료 안내',
  component: () => import('@/views/user/m9_01_03_000')
}]
const email = [{
  path: '/',
  name: 'UserEmail',
  title: '인증안내 메일 템플릿',
  component: () => import('@/views/email/m9_02_01_001') //이메일용 인라인
}, {
  path: 'emailInfo',
  name: 'UserEmailInfo',
  title: '회사코드 승인 안내 메일 템플릿',
  component: () => import('@/views/email/m9_02_01_002') //이메일용 인라인
}]
const account = [{
  path: 'login',
  name: 'UserLogin',
  title: '로그인',
  component: () => import('@/views/user/m1_02_01_000')
}, {
  path: 'state',
  name: 'UserAccountState',
  title: '계정상태 안내',
  component: () => import('@/views/user/m1_02_01_001')
}, {
  path: 'resetPassword',
  name: 'UserResetPassword',
  title: '비밀번호 재설정 입력',
  component: () => import('@/views/user/m1_02_03_001'),
}, {
  path: 'resetPasswordComplete',
  name: 'UserResetPasswordComplete',
  title: '비밀번호 재설정 완료',
  component: () => import('@/views/user/m1_02_03_002')
}, {
  path: 'findId',
  name: 'UserFindId',
  title: '아이디 찾기',
  component: () => import('@/views/user/m1_02_02_000')
}, {
  path: 'findIdComplete',
  name: 'UserFindIdComplete',
  title: '아이디 찾기 확인',
  component: () => import('@/views/user/m1_02_02_001')
}, {
  path: 'findIdUserResetPassword',
  name: 'UserFindIdResetPassword',
  title: '비밀번호 재설정 입력',
  component: () => import('@/views/user/m1_02_03_000')
}]

const userChange = [
  {
    path: 'userChange',
    name: 'UserChange',
    title: '프로필 변경',
    component: () => import('@/views/user/m7_01_01_000')
  },{
    path: 'userCitation',
    name: 'UserCitation',
    title: '회원탈퇴 본인인증',
    component: () => import('@/views/user/m7_01_02_000')
  },{
    path: 'userSecede',
    name: 'UserSecede',
    title: '회원탈퇴',
    component: () => import('@/views/user/m7_01_02_001')
  },{
    path: 'userSecedeComplete',
    name: 'UserSecedeComplete',
    title: '회원탈퇴완료',
    component: () => import('@/views/user/m7_01_02_002')
  }
]

const error = [{
  path: '/error',
  name: 'errorPage',
  title: '에러페이지',
  component: () => import('@/views/error/m9_01_02_000')
}]
//common
// const common = [
//   {
//     paht: 'error',
//     name: 'Error',
//     title: '오류',
//     component: () => import('@/views/??????????????')
//   }
// ]

//example
const example = [{
  path: 'example',
  name: 'Example',
  title: '예시',
  component: () => import('@/views/example/example.vue')
}]

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/main',
    children: [
      ...portalHomeRouter,
      ...projectRouter,
      ...aiStudyRouter,
      ...studyRouter,
      ...catalogRouter,
      ...boardRouter,
      ...example
    ]
  }, {
    path: '/user',
    name: 'user',
    component: UserLayout,
    children: [
      ...account,
      ...join,
      ...userChange
    ]
  }, {
    path: '/',
    name: 'error',
    component: UserLayout,
    children: [
      ...error
    ]
  }, {
    path: '/email',
    name: 'email',
    component: Empty,
    children: [
      ...email,
    ]
  }]
})

export default router
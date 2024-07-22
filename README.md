<h3>세미나 순서</h3>
<ol>
    <li><strong>NEXTJS</strong>프로젝트 생성 <pre>npx create-next-app@latest</pre></li>
    <li><strong>GITHUB REPOSITORY</strong> 생성 및 연결</li>
    <li><a href="https://app.netlify.com/teams/xiut1/sites"><strong>NETLIFY</strong></a>와 <a href="https://github.com/xiut1/TEST"><strong>GITHUB</strong></a> 연동 </li>
    <li>프로젝트 연결 확인 및 COMMIT, PUSH 이후에 <a href="https://app.netlify.com/sites/shimmering-bonbon-5754cd/deploys">배포</a>되는거 확인</li>
    <li>로그인 구현 되는거 확인</li>
    <li><strong>AUTH PROVIDER</strong> - <a href="https://github.com/settings/applications/2636676">GITHUB</a>, <a href="https://developers.naver.com/apps/#/myapps/CWaVBazqPY0mjVZqn2ME/overview">NAVER</a>, <a href="https://developers.kakao.com/console/app/1104585">KAKAO</a> 순으로 <strong>CLIENT-ID</strong>, <strong>CLIENT-SECRET</strong> 발급 받는 법</li>
    <li>.env.local 환경변수 등록 후 api/auth/[...nextauth].js 파일 생성 후 설명</li>
    <li>middleware 작업한거 설명</li>
</ol>

<h4>NETLIFY 사용 이유</h4>
<ol>
    <li><strong>속도와 성능</strong></li>
    <li><strong>배포 의존성 없음</strong> : GIT REPOSITORY에 대한 PUSH를 감지하면 NETLIFY는 자동으로 새로운 버전의 애플리케이션을 빌드하고 배포한다.  개발자는 서버 관리나 컨텐츠 배포에 대해 걱정할 필요가 없어지며, 개발에 더욱 집중할 수 있게 된다.</li>
    <li><strong>서버리스 함수</strong> : <a href="https://developer.oracle.com/ko/learn/technical-articles/serverless-functions">서버리스</a> 함수를 필요로 하는 작업에 대해 향상된 지원을 제공함. 이를 통해 백엔드 코드를 작성하고 실행할 수 있으며 이는 애플리케이션의 복잡성을 줄이고 프론트엔드 개발자가 백엔드 작업을 수행할 수 있게 해준다.</li>
    <li><strong>무료 플랜 제공</strong></li>
</ol>

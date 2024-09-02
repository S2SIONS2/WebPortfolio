import './ProjectsModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import bueaLine from '../assets/bueaLine.png'
import bueaCategory from '../assets/bueaCategory.png';
import bueaCategory2 from '../assets/bueaCategory2.png';
import bueaLine2 from '../assets/bueaLine2.png'

const BueaLine = ({modal2, setModal2}) => {
    return(
        <div className='BueaLine modalWrap'>
            <div className="modalHeader">
                <ul className="modalNav">
                   <li>
                        <a href="https://github.com/S2SIONS2/BueatyLine" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                        <div className='tooltip'>깃허브 바로가기</div>
                    </li>
                    <li>
                        <a href="https://deer-develope-diary.tistory.com/" target='_blank'><FontAwesomeIcon icon={faBlog} /></a>
                        <div className='tooltip'>블로그 바로가기</div>
                    </li> 
                    <li>
                        <a href="http://beauline.sionsdiary.site/" target='_blank'><FontAwesomeIcon icon={faWindowMaximize} /></a>
                        <div className='tooltip'>웹사이트 바로가기</div>
                    </li> 
                    <li>
                        <button type="button" onClick={() => setModal2(false)}><FontAwesomeIcon icon={faX} /></button>
                    </li> 
                </ul>
            </div>
            <div className='modalContent'>
                <section className='projectTitle'>
                    <div>BueaLine</div>
                    <div>기간: 2024. 07 ~ ing</div>
                </section>
                <section className='projectImg'>
                    <img src={bueaLine} alt="" />
                    <img src={bueaCategory} alt="" />
                    <img src={bueaCategory2} alt="" />
                    <img src={bueaLine2} alt="" />
                </section>
                <section className='projectIntro'>
                    <ul>
                        <li>소개: 가게 운영을 위한 모바일 관리자 웹앱입니다.</li>
                        <li>개발 인원: 2인</li>
                        <li>담당 역할: 기획, 프론트 개발, 퍼블리싱, 디자인</li>
                        <li>사용 기술: React, Bootstrap5, Scss, JWT, API, Recharts</li>
                        <li>로그인 - ID: user1, PW: 1111</li>
                    </ul>
                </section>
                <section className='projectExplain'>
                    <div className='subTitle'>주요 기능 - api 제작 등 백 제외 프론트 작업 100% 진행</div>
                    <ul>
                        <li>로그인 기능 구현 및 로그인 유지</li>
                            <span>- JWT 기반 로그인 구현</span>
                        <li>API를 이용하여 리스트 호출, 추가, 수정 및 삭제와 검색기능</li>
                            <span>- 연락처 관리를 위한 전화번호부 페이지</span>
                            <span>- 작업 종류 관리를 위한 카테고리 페이지</span>
                            <span>- 총 작업 내역 리스트</span>
                        <li>총 작업 내역 리스트</li>
                            <span>- 작업(리스트) 등록, 수정, 삭제 가능</span>
                            <span>- 날짜, 이름 별 검색 가능</span>
                            <span>- 미수금 내역 체크 시 외상 리스트만 확인</span>
                            <span>- 작업 완료 버튼과 리스트 체크박스로 작업 일괄 처리 가능</span>
                        <li>통계 차트</li>
                            <span>- Recharts 라이브러리를 이용한 차트 작업</span>
                            <span>- 총 예상 결과, 시술 별 총 금액, 총 인원 등의 차트 표시</span>
                            <span>- 바 차트, 원형 차트 두가지 차트 종류</span>
                    </ul>           
                </section>
                <section className='projectExplain'>
                    <div className='subTitle'>추가 예정 기능</div>
                    <ul>
                        <li>작업 내역 리스트 수정 중 작업 추가 가능하게 수정 예정</li>
                        <li>전반적인 기능 추가 후 apk, 앱으로 제작 예정</li>
                    </ul>
                </section>
                <section className='projectTroubleShooting'>
                    <div className='subTitle'>트러블 슈팅</div>
                    <div className='troubleIssue'>1. 로그인 연결 후 리스트 추가 오류</div>
                    <p>- 문제 상황: 헤더에 액세스 토큰 값이 없어 화면이 뜨지 않고 오류가 발생</p>
                    <p>- 해결 방법: api호출 시 헤더에 액세스 토큰 값으로 권한을 부여한다.</p>
                    <div className='troubleIssue'>2. 비동기 처리로 인한 api 호출 오류</div>
                    <p>- 문제 상황: 새로고침 시에는 list 값이 담기지 않고, 화면 리렌더링시 list 값이 담김.</p>
                    <p>- 해결 방법: useEffect를 이용, list 값이 변할 때 다시 리렌더링하며 화면에 표현함</p>
                    <p>- 블로그 포스팅: <a href='https://deer-develope-diary.tistory.com/26' target='_blank'>https://deer-develope-diary.tistory.com/26</a></p>
                    <div className='troubleIssue'>3. 리스트 호출 오류</div>
                    <p>- 문제 상황: 리스트 호출이 계속 반복해서 일어나 검색, 분류 기능이 작동했다가 안됐다가 반복함.</p>
                    <p>- 해결 방법: useEffect로 반복 호출 되어 야기되던 에러를 해결하기 위해 리스트 호출 함수를 정리 및 getList 함수로 api 호출 통일화 </p>
                    <p>- 알게된 점: 무분별한 useEffect 사용은 오히려 실행 순서에 대한 혼란스러움을 가중시킬 수 있으니, 상황과 순서에 맞게 작성하기</p>
                </section>
                <section className='projectAfter'>
                    <div className='subTitle'>프로젝트를 통해 배운점</div>
                    <div>
                        <div className='troubleIssue'>1. JWT 로그인 구현</div>
                        <p>- 블로그 포스팅: 1. Route를 통한 로그인 경로 설정 <a href='https://deer-develope-diary.tistory.com/19' target='_blank'>https://deer-develope-diary.tistory.com/19</a></p>
                        <p>- 블로그 포스팅: 2. JWT를 이용한 로그인 구현 방법 <a href='https://deer-develope-diary.tistory.com/23' target='_blank'>https://deer-develope-diary.tistory.com/23</a></p>
                    </div>
                    <div>
                        <div className='troubleIssue'>2. API get과 post 차이</div>
                        <p>- get: api 리스트를 불러올 때 사용하며, 파라미터에 특정 조건을 넣으면 조건에 맞는 리스트만 불러올 수 있다.</p>
                        <p>- post: api 리스트를 추가, 수정, 삭제 등 서버에 리스트(데이터)를 보내 리스트를 변경 할 수 있다.</p>
                        <p>- 블로그 포스팅: 1. APi get, post 차이 설명 <a href='https://deer-develope-diary.tistory.com/25' target='_blank'>https://deer-develope-diary.tistory.com/25</a></p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default BueaLine;
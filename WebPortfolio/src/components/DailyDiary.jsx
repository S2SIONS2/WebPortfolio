import './ProjectsModal.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

import dailyDiaryBook from  '../assets/dailyDiaryBook.png';

const DailyDiary = ({setModal4}) => {
    return (
        <div className="DialyDiary modalWrap">
            <div className="modalHeader">
                <ul className="modalNav">
                   <li>
                        <a href="https://github.com/S2SIONS2/DailyDiary" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                        <div className='tooltip'>깃허브 바로가기</div>
                    </li>
                    <li>
                        <a href="https://deer-develope-diary.tistory.com/" target='_blank'><FontAwesomeIcon icon={faBlog} /></a>
                        <div className='tooltip'>블로그 바로가기</div>
                    </li> 
                    <li>
                        <a href="http://mydiary.sionsdiary.site/app" target='_blank'><FontAwesomeIcon icon={faWindowMaximize} /></a>
                        <div className='tooltip'>웹사이트 바로가기</div>
                    </li> 
                    <li>
                        <button type="button" onClick={() => setModal4(false)}><FontAwesomeIcon icon={faX} /></button>
                    </li> 
                </ul>
            </div>
            <div className='modalContent'>
                <section className='projectTitle'>
                    <div>Daily Diary</div>
                    <div>기간: 2024. 09. 19 ~ ing </div>
                </section>
                <section className='projectImg'>
                    <img src={dailyDiaryBook} alt="" />
                </section>
                <section className='projectIntro'>
                    <ul>
                        <li>소개: 독서록, 습관 트래커 및 목표 등을 기록하고 차트로 만들어 시각화하여 관리할 수 있는 나만의 다이어리 페이지 입니다.</li>
                        <li>개발 인원: 2인 - 프론트, 백엔드</li>
                        <li>담당 역할: 기획, 프론트 개발, 퍼블리싱(서버 배포, api 제작 외 전부)</li>
                        <li>사용 기술: React, Redux, Typescript, Restful API, Open API, JSON-server, Bootstrap5, Scss, 반응형 웹</li>
                    </ul>
                </section>
                <section className='projectExplain'>
                    <div className='subTitle'>프로젝트 특징</div>
                    <ul>
                        <li>Redux를 이용한 상태 관리</li>
                            <span>- toolkit 라이브러리를 사용하여 보다 간단한 코드 구현 </span>
                            <span>- 호출하는 Open API 상태 관리 </span>
                            <span>- 데이터 관리 API 상태 관리 </span>
                        <li>Restful API를 활용한 리스트 REST 기능</li>
                            <span>- Get, Post, Patch, Delete 기능 사용</span>
                            <span>- 전체를 수정하는 내용이 없어 Patch로 사용</span>
                        <li>Json-Server를 사용하여 Rest API 구축</li>
                            <span>- 작업(리스트) 등록, 수정, 삭제 가능</span>
                            <span>- 날짜, 이름 별 검색 가능</span>
                            <span>- 미수금 내역 체크 시 외상 리스트만 확인</span>
                            <span>- 작업 완료 버튼과 리스트 체크박스로 작업 일괄 처리 가능</span>
                            <span>- 작업 내역 리스트 수정 중 작업 추가 가능하게 수정</span>
                            <span>- 리스트 수정 시 진행 중이던 작업 수정 가능하게 변경</span>
                            <span>- 결제, 작업완료 여부 수정 및 메모 수정 가능</span>
                            <span>- 작업 중복 추가 방지 및 체크 박스 표시</span>
                        <li>통계 차트</li>
                            <span>- Recharts 라이브러리를 이용한 차트 작업</span>
                            <span>- 총 예상 결과, 시술 별 총 금액, 총 인원 등의 차트 표시</span>
                            <span>- 바 차트, 원형 차트 두가지 차트 종류</span>
                    </ul>           
                </section>
                <section className='projectExplain'>
                    <div className='subTitle'>주요 기능</div>
                    <ul>                    
                        <li>독서록</li>
                            <span>- 네이버 책 검색 API를 이용한 기록할 책 선택</span>
                            <span>- 책 리스트 표출 시 페이징을 통해 다량의 데이터 호출 방지 및 속도 개선</span>
                            <span>- Restful API를 이용하여 독서록 게시물 저장, 수정, 삭제 관리</span>
                        <li>달력</li>
                            <span>- 달력 일정 추가 등 일정 관리</span>
                            <span>- 할 일 목록(To Do List) 관리</span>
                        <li>일기장</li>
                            <span>- 일기 쓰고 수정하고 삭제하기</span>
                            <span>- 감정 기록하기</span>
                            <span>- 감정, 날짜에 따른 일기 필터 기능</span>
                    </ul>
                </section>
                <section className='projectExplain'>
                    <div className='subTitle'>추가 예정 기능</div>
                    <ul>                                         
                        <li>습관 트래커 및 목표</li>
                            <span>- 매달 한 달간의 습관 트래커 및 목표를 기록</span>
                            <span>- 한 달 주기 목표 달성률과 습관 형성 그래프를 제공, 시각적으로 관리</span>
                            <span>- 달력의 할 일 목록(To Do List)와 연계하여 달성률 그래프 제공</span>
                    </ul>
                </section>
                <section className='projectTroubleShooting'>
                    <div className='subTitle'>트러블 슈팅</div>
                    <div className='troubleIssue'>1. API 조건부 호출 문제</div>
                    <p>- 문제 상황: 네이버 검색 API 사용 시 검색 파라미터 값이 없어도 계속해서 API가 호출 되며 에러 메시지가 출력됨.</p>
                    <p>- 해결 방법: Redux로 설정 했던 api slice 파일에서 파라미터가 있을 때만 API를 호출하도록 수정함.</p>
                    <div className='troubleIssue'>2. Typescript 사용으로 인한 타입 지정 오류</div>
                    <p>- 문제 상황: API호출은 완료 됐으나, 타입 지정에 대한 에러 메시지가 계속 나타남</p>
                    <p>- 해결 방법: API 값을 받아오고 사용할 때에도 값에 대한 타입 지정을 해줌</p>
                </section>
                <section className='projectAfter'>
                    <div className='subTitle'>프로젝트를 후기</div>
                    <div>
                        <div className='troubleIssue'>1. Redux 사용 방법과 사용 이유에 대해 좀 더 깊이 있는 생각을 할 수 있었다.</div>
                        <p>- 블로그 포스팅: 1. Redux 파헤치기: 기초 정보 <a href='https://deer-develope-diary.tistory.com/31' target='_blank'>https://deer-develope-diary.tistory.com/31</a></p>
                        <p>- 블로그 포스팅: 2. Redux 파헤치기: 실행하기 (feat.TS) <a href='https://deer-develope-diary.tistory.com/32' target='_blank'>https://deer-develope-diary.tistory.com/32</a></p>
                    </div>
                    <div>
                        <div className='troubleIssue'>2. Typescript의 사용 방법과 React와 함께 사용 하는 법에 대해 알았다.</div>
                        <p>- 생각보다 React에서 타입스크립트와 호환이 되어 구체적인 타입 지정이 필수적이지 않은 경우가 많았으나, 
                            파라미터로 값을 넘길 땐 지정이 필수적이었다. 
                            또한 전 프로젝트에서는 지정 없이 되었던 코드들이 타입 지정 에러 메시지가 나타나는 것을 보고 
                            큰 프로젝트거나 다른 사람과 협업하는 프로젝트인 경우 잠재적인 위험 요소가 얼마나 많은지 알게 되었다. 
                        </p>
                        <p>- 코드 작성 시에 오류를 방지할 수 있다는 점이 정말 좋고 멋있는 부분인 것 같다..</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DailyDiary;
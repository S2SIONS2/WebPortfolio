import './ProjectsModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import tagWordsImg from '../assets/tagWords.png'

const tagWordsModal = ({modal1, setModal1}) => {
    return (
        <div className="tagWordsModal modalWrap">
            <div className="modalHeader">
                <ul className="modalNav">
                   <li>
                        <a href="https://github.com/S2SIONS2/TagWords" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                        <div className='tooltip'>깃허브 바로가기</div>
                    </li>
                    <li>
                        <a href="https://deer-develope-diary.tistory.com/" target='_blank'><FontAwesomeIcon icon={faBlog} /></a>
                        <div className='tooltip'>블로그 바로가기</div>
                    </li> 
                    <li>
                        <a href="/" target='_blank'><FontAwesomeIcon icon={faWindowMaximize} /></a>
                        <div className='tooltip'>웹사이트 바로가기</div>
                    </li> 
                    <li>
                        <button type="button" onClick={() => setModal1(false)}><FontAwesomeIcon icon={faX} /></button>
                    </li> 
                </ul>
            </div>
            <div className='modalContent'>
                <section className='projectTitle'>
                    <div>끝말잇기</div>
                    <div>기간: 2024. 06 ~ 2024. 06 (약 2주)</div>
                </section>
                <section className='projectImg'>
                    <img src={tagWordsImg} alt="" />
                </section>
                <section className='projectIntro'>
                    <ul>
                        <li>소개: React.js로 프로젝트를 구성하고 국립국어원 API를 이용한 끝말잇기 게임입니다.</li>
                        <li>개발 인원: 1인</li>
                        <li>담당 역할: 기획, 개발</li>
                        <li>사용 기술: React, Css, Axios, API</li>
                    </ul>
                </section>
                <section className='projectExplain'>
                    <div className='subTitle'>주요 기능</div>
                    <ul>
                        <li>3글자 쿵쿵따</li>
                        <li>중복된 단어의 입력 제한</li>
                        <li>사전적 의미가 없는 무의미한 단어 입력 불가능</li>
                        <li>상단 채팅에 단어 기록과 뜻 표시</li>
                        <li>Ctrl + R 버튼 입력 시 게임 초기화</li>
                        <li>60초 타이머 기능</li>
                    </ul>
                </section>
                <section className='projectTroubleShooting'>
                    <div className='subTitle'>트러블 슈팅</div>
                    <div className='troubleIssue'>1. API CORS Error 발생</div>
                    <p>- 해결 방법: Proxy 서버를 이용하여 요청 url경로를 재 작성 하였다.</p>
                    <p>- 관련 블로그 포스팅: <a href='https://deer-develope-diary.tistory.com/18' target='_blank'>https://deer-develope-diary.tistory.com/18</a></p>

                    <div className='troubleIssue'>2. Javascript의 비동기 방식으로 인한 API 무 응답</div>
                    <p>- 오류 상황: 개발자 도구의 network 탭에서는 API가 연결이 된 것을 확인 하였으나 화면에는 값이 호출 되지 않음</p>
                    <p>- 사유: 자바스크립트의 비동기적 처리 때문에 API 호출 전에 함수가 먼저 실행 됨</p>
                    <p>- 해결 방법: Async/Await를 사용하여 동기 방식으로 API와 함수를 호출함으로써 문제를 해결함.</p>
                </section>
                <section className='projectAfter'>
                    <div className='subTitle'>프로젝트를 끝내고 나서...</div>
                    <div>
                        1. API 호출 법과 Access-Control-Allow-Origin 에러 처리 방법에 대해 알게 되었다.
                    </div>
                    <div>
                        2. 자바스크립트의 싱글 Thread 처리 방식과 비동기 호출에 대한 오류 발생 및 해결 방법
                    </div>
                    {/* <div>
                        - 간단하게 설명하자면 자바스크립트는 싱글 스레드 언어로 기본적으로는 동기 언어이나 이벤트 루프를 기반으로 동작하여 비동기 함수를 이용할 수 있다.
                        하지만 비동기 작업을 실행 중 다른 작업이 완료되기 전에 다른 코드가 먼저 실행 될 수 있어 이에 따른 오류가 발생 할 수 있다.
                        이를 방지하기 위해 Async/Await을 통해 호출이 완료 될 때 까지 함수를 기다리게 하여 위와 같은 오류를 방지 할 수 있었다.
                    </div> */}
                </section>
            </div>
        </div>
    )
}

export default tagWordsModal;
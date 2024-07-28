import './ProjectsModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import bueaLine from '../assets/bueaLine.png'
import bueaCategory from '../assets/bueaCategory.png';
import bueaCategory2 from '../assets/bueaCategory2.png';

const BueaLine = ({modal2, setModal2}) => {
    return(
        <div className='BueaLine modalWrap'>
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
                </section>
                <section className='projectIntro'>
                    <ul>
                        <li>소개: 가게 운영을 위한 모바일 관리자 웹앱입니다.</li>
                        <li>개발 인원: 2인</li>
                        <li>담당 역할: 기획, 프론트 개발, 퍼블리싱</li>
                        <li>사용 기술: React, Bootstrap, Scss, JWT, API</li>
                        <li>로그인 - ID: user1, PW: 1111</li>
                    </ul>
                </section>
                <section className='projectExplain'>
                    <div className='subTitle'>주요 기능</div>
                    <ul>
                        <li>로그인 기능 구현 및 로그인 유지</li>
                        <li>API를 이용하여 리스트 호출, 추가, 수정 및 삭제와 검색기능</li>
                    </ul>           
                </section>
                <section className='projectExplain'>
                    <div className='subTitle'>추가 예정 기능</div>
                    <ul>
                        <li>연락처 관리를 위한 전화번호부 페이지</li>
                        <li>API를 이용하여 리스트 호출, 추가, 수정 및 삭제와 검색기능</li>
                        <li>총 작업 내역</li>
                        <li>진행 중인 작업 내역</li>
                        <li>통계 차트</li>
                    </ul>
                </section>
                <section className='projectTroubleShooting'>
                    <div className='subTitle'>트러블 슈팅</div>
                    <div className='troubleIssue'>1. JWT를 이용한 로그인 유지</div>
                    <p>- 해결 방법: </p>
                    <p>- 관련 블로그 포스팅: <a href='https://deer-develope-diary.tistory.com/18' target='_blank'>https://deer-develope-diary.tistory.com/18</a></p>
                </section>
                <section className='projectAfter'>
                    <div className='subTitle'>프로젝트를 통해 배운점</div>
                    <div>
                        1. JWT 로그인 구현
                        <p>- 관련 블로그 포스팅: <a href='https://deer-develope-diary.tistory.com/18' target='_blank'>https://deer-develope-diary.tistory.com/18</a></p>
                    </div>
                    <div>
                        2. 
                    </div>
                </section>
            </div>
        </div>
    )
}

export default BueaLine;
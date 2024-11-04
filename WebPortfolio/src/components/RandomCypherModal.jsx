import './ProjectsModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import randomCypher from  '../assets/randomCypher.png';

const RandomCypherModal = ({setModal3}) => {
    return(
        <div className="RandomCypher modalWrap">
            <div className="modalHeader">
                <ul className="modalNav">
                   <li>
                        <a href="https://github.com/S2SIONS2/RandomCypher" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                        <div className='tooltip'>깃허브 바로가기</div>
                    </li>
                    <li>
                        <a href="https://deer-develope-diary.tistory.com/" target='_blank'><FontAwesomeIcon icon={faBlog} /></a>
                        <div className='tooltip'>블로그 바로가기</div>
                    </li> 
                    <li>
                        <a href="http://randomcyphers.sionsdiary.site/" target='_blank'><FontAwesomeIcon icon={faWindowMaximize} /></a>
                        <div className='tooltip'>웹사이트 바로가기</div>
                    </li> 
                    <li>
                        <button type="button" onClick={() => setModal3(false)}><FontAwesomeIcon icon={faX} /></button>
                    </li> 
                </ul>
            </div>
            <div className='modalContent'>
                <section className='projectTitle'>
                    <div>랜덤 캐릭터 뽑기</div>
                    <div>기간: 2024. 09. 24 ~ 2024. 09. 24 (1일)</div>
                </section>
                <section className='projectImg'>
                    <img src={randomCypher} alt="" />
                </section>
                <section className='projectIntro'>
                    <ul>
                        <li>소개: 게임 중 캐릭터 선택을 랜덤으로 매칭해주는 웹사이트 입니다.</li>
                        <li>개발 인원: 2인 - 프론트, 백엔드</li>
                        <li>담당 역할: 기획, 프론트 개발, 퍼블리싱 (서버 배포 외 전체)</li>
                        <li>사용 기술: React, Typescript, Open API, Bootstrap5, Scss</li>
                    </ul>
                </section>
                <section className='projectExplain'>
                    <div className='subTitle'>주요 기능</div>
                    <ul>
                        <li>네오플 오픈 API를 이용하여 캐릭터가 랜덤으로 나타나는 웹사이트 입니다.</li>
                        <li>뽑기 버튼으로 API 재호출 방지 및 API 호출 시 처음 접속시에만 호출</li>
                        <li>뽑기 버튼을 이용하여 다시 재호출 하지 않고 선택된 배열 내에서 다시 추출합니다.</li>
                        <li>로컬스토리지에 저장</li>
                        <li>로컬 스토리지에 입력된 이름을 저장하여 뽑기 시 다시 이름을 입력할 필요가 없습니다.</li>
                        <li>또한 인원 수도 로컬스토리지에 저장하여 다시 설정할 필요가 없습니다.</li>
                        <li>캐릭터 복사하기 버튼</li>
                        <li>복사하기 버튼을 통해 뽑힌 캐릭터를 친구들과 공유할 수 있습니다.</li>
                        <li>토스트 메시지를 통해 복사 여부를 확인할 수 있습니다.</li>
                    </ul>
                </section>
                <section className='projectTroubleShooting'>
                    <div className='subTitle'>트러블 슈팅</div>
                    <div className='troubleIssue'>1. Clipboard API가 동작하지 않음</div>
                    <p>- 문제: 해당 API는 https, local 환경에서만 동작하여 http인 웹 사이트에서 동작하지 않음.</p>
                    <p>- 해결: react-copy-to-clipboard 라이브러리로 대체해서 사용</p>
                </section>
            </div>
        </div>
    )
}

export default RandomCypherModal;
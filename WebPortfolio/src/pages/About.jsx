import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faSass } from '@fortawesome/free-brands-svg-icons'
import jQuery from  '../assets/jQuery.png';
import profileImg from '../assets/myProfile.jpeg';

const About = () => {
    return(
        <div className="About">
            <section className="profile">
                <div className="imgArea">
                    <img src={profileImg} alt=''/>
                </div>
                <div className="intro">
                    <h1>이시온</h1>
                    <p className='mb-1'>1998. 02. 12</p>
                    <p className='mb-1'>안산대학교 식품영양과 졸업 후 방송통신대학교 식품영양학과를 졸업하였습니다.</p>
                    <p className='mb-1'><span className='lightPink'>새로운 것을 배우고 실행 하는 것을 좋아하며,</span> 
                        퍼블리셔 근무 당시 <span className='border-bottom'>최신 css인 container 코드를 사용하여 스크립트 코드를 간략화</span> 
                        한 적이 있습니다. 
                    </p>
                    <p>회사 내 유일한 퍼블리셔로 근무하며 <span className='lightPink'>웹 표준화와 웹 접근성을 지향한 코드를 작성</span>했으며, 적응력이 좋습니다. </p>
                </div>
            </section>
            <section className="career">
                <div className="boxWrap">
                    <h1>경력사항</h1>
                    <div className="box">
                        <ul>
                            <li>
                                <h2>(주) 텍트원 [2022.06 ~ 2024.03] - 퍼블리셔</h2>
                            </li>
                            <li>
                                <h2>1. 스마트 팩토리 기반 웹페이지 퍼블리싱</h2>
                            </li>
                            <li>
                                <span className='ms-1'>1.1. [LG PraiCam]</span>
                            </li>
                            <li>
                                <p> - HTML, CSS, jQuery를 이용한 화면 퍼블리싱</p>                                                             
                            </li>
                            <li>
                                <p> - 최신 CSS 문법을 사용하여 스크립트 최소화</p>
                            </li>
                            <li>
                                <p> - 반응형 웹사이트 및 크로스 브라우징 구현</p>
                            </li>
                            <li className='mb-1'>
                                <p> - 객체 사이즈에 따라 달라지는 화면 알람 구현</p>
                            </li>

                            <li>
                                <span className='ms-1'>1.2. [LG PraiCam Cloud]</span>
                            </li>
                            <li>
                                <p> - HTML, CSS, jQuery를 이용한 화면 퍼블리싱</p>                                                             
                            </li>
                            <li>
                                <p> - 최신 CSS 문법을 사용하여 스크립트 최소화</p>
                            </li>
                            <li>
                                <p> - 반응형 웹사이트 및 크로스 브라우징 구현</p>
                            </li>
                            <li>
                                <p> - 웹 표준화 및 웹 접근성 준수 </p>
                            </li>
                            <li className='mb-1'>
                                <p> - 차트 및 그래프 퍼블리싱</p>
                            </li>

                            <li>
                                <span className='ms-1'>1.3. [LG 양극재]</span>
                            </li>
                            <li>
                                <p> - HTML, CSS, jQuery를 이용한 화면 퍼블리싱</p>                                                             
                            </li>
                            <li>
                                <p> - 최신 CSS 문법을 사용하여 스크립트 최소화</p>
                            </li>
                            <li>
                                <p> - 반응형 웹사이트 및 크로스 브라우징 구현</p>
                            </li>
                            <li>
                                <p> - 이미지 누끼 제거 및 웹 화면 디자인</p>
                            </li>
                            <li>
                                <p> - 도면 위 알람 영역 표시</p>
                            </li>
                            <li className='mb-1'>
                                <p> - 차트 및 그래프 퍼블리싱</p>
                            </li>

                            <li>
                                <span className='ms-1'>1.4. [그 외 기타 프로젝트]</span>
                            </li>
                            <li>
                                <p> - 공장 대시보드 화면 퍼블리싱</p>
                            </li>
                            <li>
                                <p> - 애니메이션을 이용한 알람 표시</p>
                            </li>
                            <li>
                                <p> - HTML, CSS, jQuery를 이용한 화면 퍼블리싱</p>                                                             
                            </li>
                            <li>
                                <p> - 최신 CSS 문법을 사용하여 스크립트 최소화</p>
                            </li>
                            <li>
                                <p> - 반응형 웹사이트 및 크로스 브라우징 구현</p>
                            </li>
                            <li>
                                <p> - 이미지 누끼 제거 및 웹 화면 디자인</p>
                            </li>
                            <li>
                                <p> - 도면 수정 및 웹 디자인</p>
                            </li>
                            <li className='mb-1'>
                                <p> - 차트 및 그래프 퍼블리싱</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h2>2. 기존 디자인 반영 새로운 페이지 디자인</h2>
                            </li>
                            <li>
                                <p> - 기존 디자인을 기반으로 한 새로운 화면 디자인</p>                                                             
                            </li>
                            <li>
                                <p> - 제공된 이미지를 활용하여 누끼 처리 및 간단한 도면 수정</p>
                            </li>
                        </ul>
                    </div>
                </div>             
            </section>
            <section className='skills'>
            <div className="boxWrap">
                    <h1>능력</h1>
                    <div className="box skillBox mb-1">
                        <ul>
                            <li>
                                <h2>편해요: </h2>                
                            </li>
                            <li>
                                <p>
                                    <span><FontAwesomeIcon icon={faHtml5} /></span> HTML
                                </p>
                                <p>
                                    <span><FontAwesomeIcon icon={faCss3Alt} /></span> CSS
                                </p>
                                <p>
                                    <span><FontAwesomeIcon icon={faJs} /></span> JAVASCRIPT
                                </p>
                                <p>
                                    <span style={{ background: `url(${jQuery}) no-repeat center/cover`, width:'18px', height: '18px', display: 'inline-block'}}></span>J-Query
                                </p>
                                <p>
                                    <span><FontAwesomeIcon icon={faReact} /></span>React
                                </p>
                                <p>
                                    <span><FontAwesomeIcon icon={faBootstrap} /></span>Bootstrap
                                </p>
                                <p>Svn</p>
                            </li>
                        </ul>
                    </div>
                    <div className='box skillBox mb-1'>
                        <ul>
                            <li>
                                <h2>어느 정도 사용 할 수 있어요:</h2>                   
                            </li>
                            <li>                            
                                <p>
                                    <span><FontAwesomeIcon icon={faSass} /></span>Scss
                                </p>
                                <p>
                                    <span><FontAwesomeIcon icon={faFigma} /></span>Figma
                                </p>
                                <p>
                                    Git
                                </p>                     
                            </li>
                        </ul>
                    </div>
                    <div className='box'>
                        <ul className='mb-1'>
                            <li>
                                <h2>• 리액트와 라이브러리를 이용한 웹 페이지 제작</h2>                   
                            </li>
                            <li>                            
                                <p>
                                    - api를 이용하여 api 등록, 수정, 삭제 기능 구현
                                </p>
                                <p>
                                    - 차트 라이브러리를 이용하여 차트 구현
                                </p>   
                                <p>
                                    - createContext를 이용하여 웹 페이지 내 데이터 props 관리
                                </p>
                                <p>
                                    - JWT를 이용하여 로그인 구현
                                </p>
                            </li>
                        </ul>
                        <ul className='mb-1'>
                            <li>
                                <h2>• HTML, CSS, J-QUERY를 이용한 웹 사이트 퍼블리싱</h2>                   
                            </li>
                            <li>                            
                                <p>
                                    -  스마트 팩토리를 이용한 기계 대시보드 퍼블리싱
                                </p>
                                <p>
                                    -  프로그램을 설명하는 웹사이트 퍼블리싱
                                </p>
                                <p>
                                    -  관리자 화면 및 페이지 퍼블리싱
                                </p>              
                            </li>
                        </ul>
                        <ul className='mb-1'>
                            <li>
                                <h2>• 최신 CSS 문법을 사용하여 스크립트 최소화, 직관적인 코드 작성</h2>                   
                            </li>
                            <li>                            
                                <p>
                                    -  has, Is, container query등을 사용
                                </p>
                                <p>
                                    -  container query를 사용하여 직관적인 코드 작성
                                </p>           
                            </li>
                        </ul>
                        <ul className='mb-1'>
                            <li>
                                <h2>• 크로스 브라우징과 반응형 웹사이트 제작</h2>                   
                            </li>
                            <li>                            
                                <p>
                                    -  Can i use? 사이트를 이용하여 크로스 브라우징 이슈 확인
                                </p>
                                <p>
                                    -  웹사이트와 태블릿, 모바일을 염두한 반응형 웹사이트 제작
                                </p>           
                            </li>
                        </ul>
                        <ul className='mb-1'>
                            <li>
                                <h2>• Figma와 그림판3D를 이용하여 도면 수정</h2>                   
                            </li>
                            <li>                            
                                <p>
                                    - 이미지 배경 제거(누끼 따기)
                                </p>
                                <p>
                                    - 잘못 표시된 기계 설비 이미지 수정 등
                                </p>           
                            </li>
                        </ul>
                    </div>
                </div>  
            </section>
            <section className='interview'>
                <div className="boxWrap">
                    <h1>자문자답</h1>
                    <div className="box">
                        <h2>제 성격은요?</h2>
                        <p>항상 긍정적인 마인드로 도전을 두려워하지 않는 마음과 열정으로 목표를 향해 꾸준히 나아갑니다.</p>
                    </div>
                    <div className="box">
                        <h2>제가 되고 싶은 개발자는요?</h2>
                        <p>문제 해결에 관심을 가지고 끊임없이 성장하여 최신 기술을 습득하는 개발자가 되고 싶습니다.</p>
                        <p>또한 사용자에게 가치 있는 프로그램을 제공하며 팀과 협업하여 앞으로 나아가는 미래를 그리는 것이 목표입니다.</p>
                    </div>
                    <div className="box">
                        <h2>앞으로의 목표</h2>
                        <p>2024년 목표: 정보처리기사 취득과 TypeScript, 기능 구현에만 급급하지 않고 왜 실행이 되는지 등 React를 심도 있게 공부 하고 싶습니다.</p>
                        <p>2025년 목표: Next.js를 공부하여 백과 프론트 모두 능통한 개발자가 되고 싶습니다.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
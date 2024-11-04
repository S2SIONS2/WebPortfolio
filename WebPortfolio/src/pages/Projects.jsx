import './Projects.css'
import tagWords from  '../assets/tagWords.png';
import bueaLine from  '../assets/bueaLine.png';
import randomCypher from  '../assets/randomCypher.png';
import dailyDiaryBook from  '../assets/dailyDiaryBook.png';

import TagWordsModal from '../components/TagWordsModal';
import BueaLine from '../components/BueaLine';
import RandomCypherModal from '../components/RandomCypherModal';
import DailyDiary from '../components/DailyDiary';

import { useState } from 'react';

const Projects = () => {
    // tagWords
    const [modal1, setModal1] = useState(false)
    const openModal1 = () => {
        setModal1(true)
    }
    // BueaLine
    const [modal2, setModal2] = useState(false)
    const openModal2 = () => {
        setModal2(true)
    }
    // randomCypher
    const [modal3, setModal3] = useState(false)
    const openModal3 = () => {
        setModal3(true)
    }
    // Diary
    const [modal4, setModal4] = useState(false)
    const openModal4 = () => {
        setModal4(true)
    }

    return(
        <div className="Projects">
            <div className='title'>PROJECTS</div>
            <div className='projects_wrap'>
                <div className='project_card'>
                    <div className='imgArea'>
                        <div style={{background: `url(${dailyDiaryBook}) no-repeat center/contain #F9F9E0`, width:'100%', height: '100%', display: 'block'}}></div>
                    </div>
                    <div className='infoArea'>
                        <div className='project_title'>
                            Daily Diary
                        </div>
                        <div className='project_info'>
                            독서록, 습관 트래커 및 목표 등을 기록하는 나만의 다이어리 페이지.
                            <div className='btn_wrap'>
                                <button 
                                    type='button'
                                    onClick={openModal4}
                                > 자세히 보기 </button>                                   
                                <button type='button'> <a href='http://mydiary.sionsdiary.site/app' target='_blank'>웹페이지 바로가기</a> </button>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='project_card'>
                    <div className='imgArea'>
                        <div style={{background: `url(${bueaLine}) no-repeat center/contain #fff`, width:'100%', height: '100%', display: 'block'}}></div>
                    </div>
                    <div className='infoArea'>
                        <div className='project_title'>
                            BueaLine
                        </div>
                        <div className='project_info'>
                            사장님 & 관리자를 위한 모바일 웹앱
                            <div style={{marginTop: '8px'}}>ID: user1 , PW: 1111</div>
                            <div className='btn_wrap'>
                                <button 
                                    type='button'
                                    onClick={openModal2}
                                > 자세히 보기 </button>                                   
                                <button type='button'> <a href='http://beauline.sionsdiary.site' target='_blank'>웹페이지 바로가기</a> </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project_card'>
                    <div className='imgArea'>
                        <div style={{background: `url(${randomCypher}) no-repeat center/contain #F9F9E0`, width:'100%', height: '100%', display: 'block'}}></div>
                    </div>
                    <div className='infoArea'>
                        <div className='project_title'>
                            랜덤 캐릭터 뽑기
                        </div>
                        <div className='project_info'>
                            게임 중 캐릭터 선택을 랜덤으로 매칭해주는 웹사이트 입니다.
                            <div className='btn_wrap'>
                                <button 
                                    type='button'
                                    onClick={openModal3}
                                > 자세히 보기 </button>                                   
                                <button type='button'> <a href='http://randomcyphers.sionsdiary.site' target='_blank'>웹페이지 바로가기</a> </button>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='project_card'>
                    <div className='imgArea'>
                        <div style={{background: `url(${tagWords}) no-repeat center/contain #F9F9E0`, width:'100%', height: '100%', display: 'block'}}></div>
                    </div>
                    <div className='infoArea'>
                        <div className='project_title'>
                            끝 말 잇기
                        </div>
                        <div className='project_info'>
                            국립국어원 API를 활용한 끝말잇기 게임
                            <div className='btn_wrap'>
                                <button 
                                    type='button'
                                    onClick={openModal1}
                                > 자세히 보기 </button>                                   
                                <button type='button'> <a href='http://tagwords.sionsdiary.site' target='_blank'>웹페이지 바로가기</a> </button>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
            { // tagWords 프로젝트 설명 모달
                modal1 && <TagWordsModal setModal1={setModal1}/>
            }
            { // bueaLine 프로젝트 설명 모달
                modal2 && <BueaLine setModal2={setModal2}/>
            }
            { // randomCypher 프로젝트 설명 모달
                modal3 && <RandomCypherModal setModal3={setModal3}/>
            }
            { // dailyDiary 프로젝트 설명 모달
                modal4 && <DailyDiary setModal4={setModal4}/>
            }
        </div>
    )
}

export default Projects;
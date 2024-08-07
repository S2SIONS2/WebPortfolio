import './Projects.css'
import tagWords from  '../assets/tagWords.png';
// import portfolio from  '../assets/portfolio.png';
import bueaLine from  '../assets/bueaLine.png';
import TagWordsModal from '../components/TagWordsModal';
import BueaLine from '../components/BueaLine';
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

    return(
        <div className="Projects">
            <div className='title'>PROJECTS</div>
            <div className='projects_wrap'>
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
            </div>
            { // tagWords 프로젝트 설명 모달
                modal1 && <TagWordsModal modal1={modal1} setModal1={setModal1}/>
            }
            { // tagWords 프로젝트 설명 모달
                modal2 && <BueaLine modal2={modal2} setModal2={setModal2}/>
            }
        </div>
    )
}

export default Projects;
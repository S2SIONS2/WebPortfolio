import './Projects.css'
import tagWords from  '../assets/tagWords.png';
import TagWordsModal from '../components/TagWordsModal';
import { useState } from 'react';

const Projects = () => {
    const [modal1, setModal1] = useState(false)
    const openModal1 = () => {
        setModal1(true)
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
                                <button type='button'> <a href='https://github.com/S2SIONS2/TagWords' target='_blank'>GitHub 바로가기</a> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { // tagWords 프로젝트 설명 모달
                modal1 && <TagWordsModal modal1={modal1} setModal1={setModal1}/>
            }
        </div>
    )
}

export default Projects;
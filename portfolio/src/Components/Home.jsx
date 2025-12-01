import "./AboutMe";
import "./Home.css"; 


function Home(props) {
    
  
    return (

        <div className='common' theme={props .dabaa? "dark":"light"}>
        
        <section className="home"  >
            <div className="home-content">
                <h1 >I'm SAKSHI CHAVAN</h1>
                <p>currently pursuing BTech undergraduate Degree at Terna Engineering College(Nerul).I always like to explore new things in programming world.
                    Passionate Frontend developer and proficient in java (core) along with jdbc ,swing and awt and c(core) languages</p>
                
            </div>
            <div className="home-image">
            <img src="https://cdn-icons-png.flaticon.com/512/11498/11498797.png"/>
            </div>
            <div>
            
            </div>
        </section>
        </div>
        

    );
}

export default Home;

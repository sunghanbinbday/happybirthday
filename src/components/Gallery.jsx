import childhoodphoto from '.././galleryassets/Fm7CajxaMAcHdZq.jpeg';
import ffanmeet from '.././galleryassets/FnPamRwacAMi7x-.png';
import sfanmeet from '.././galleryassets/Fuu4B8lacAghPk_.jpeg';
import finalranking from ".././galleryassets/FvCo48haEAIXZ-3.jpeg";
import kconfanmeet from '.././galleryassets/FwefziyaIAEYyuF.jpeg';
import kconperf from '.././galleryassets/FwLdNBOX0AIZ_mC (1).jpeg';
import flook from '.././galleryassets/FyCdQ1YaUAAGB_a.jpeg';
import byubyu from '.././galleryassets/FxzZ__QaAAABrAX.jpeg';
import cat from '.././galleryassets/cat-7726019_1280.png';
import subway from '.././galleryassets/FxsaRVzaAAAOAGA.jpeg';
import hamster from '.././galleryassets/198628628_l_normal_none.jpg';
import FlipCard from './FlipCard';
import FlipCard2 from './FlipCard2';

export default function Gallery() {

  return (
    <div className="section3">
      <h1 style={{
        gridRow: "1/span 1",
        gridColumn: "1/span 3"

      }}>Gallery</h1>
      <grid-item>
        {/* <img style={{
          overflow: 'hidden',
          maxWidth: "100%",
          minHeight: "0%"
        }}
          src={childhoodphoto} alt="hanbin childhood" /> */}
        <FlipCard imgUrl={childhoodphoto} msg="Another chapter has come, and my I only wish is for you to continue to smile like this. You've been working so hard to achieve your dream, and I am so proud of you. May the joy you bring to us come back to you twofold.
I will always support you, Hanbin ♡" author="@quietbinbin" />
      </grid-item>
      <grid-item>
        {/* <img style={{
          objectFit: "contain",
          overflow: 'hidden',
          maxWidth: "100%"
        }}
          src={byubyu} alt="hanbin beautiful beautiful" /> */}
        <FlipCard
          imgUrl={byubyu}
          msg="Hanbin-ah, I'm definitely learning a lot from you. How you think, how you act and most importantly, how you love. I wonder how could someone like you exists in this world. I can talk about your charisma and charm on stage, I can talk about your voice when you sing, and I can talk about how you move your body when you dance. But I'm most impressed of your heart & your soul. Hanbin-ah, you must have sacrificed much things in your life to come this far. For us to meet you, For you to meet us, like this. While this road can sometimes hurt you, please know there is us beside you."
          author="@allindanhb"
        />
      </grid-item>
      <grid-item>
        {/* <img style={{
          objectFit: "contain",
          overflow: 'hidden',
          maxWidth: "100%"
        }}
          src={ffanmeet} alt="hanbin first fanmeet" /> */}
        <FlipCard imgUrl={ffanmeet} msg={`(Cont)
          You know you can rest when you feel tired, right? It's fine. I actually hope you prioritize yourself first. Please take good care of your health, Hanbin-ah. You have done great job, tap your shoulder and pat your head, Hanbin-ah. I wanna thank you for working hard♡.
          Bye Bye Sung Hanbin (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠) 
          Happy Birthdayy! #To_SungHanbin
          🥺 Hanbin-ah, I'm still young and still growing. I wanna have such heart too. My personal goal for my future self is to have such genuine kind heart, like you. ❤️‍🩹`}
        />
      </grid-item>
      <grid-item>
        {/* <img style={{
          objectFit: "contain",
          overflow: 'hidden',
          maxWidth: "100%"
        }}
          src={sfanmeet} alt="hanbin second fanmeet" /> */}
        <FlipCard2
          imgUrl={sfanmeet}
          backImgUrl={cat}
        />
      </grid-item>
      <grid-item>
        {/* <img style={{
          objectFit: "contain",
          overflow: 'hidden',
          maxWidth: "100%"
        }}
          src={subway} alt="hanbin subway fanmeet" /> */}
        <FlipCard
          imgUrl={subway}
          msg={`dear Sung Hanbin,
          thousand minutes have passed by
          yet I'm still at the corner
          like a child who doesn't know what to buy
          wondering what kind of words do I have to say
          memories bring me back to your first entrance
          where you left me in awe
          feels like all constellations aligned
          emphasizing your breathtaking eyes
          so that I can't help but feel enchanted
          you bring me stars through my darkest nights
          you paint me colors through my lifeless days
          you give me strengths through my great war
          even thousands of wards couldn't surpass how
          much I want to thank you`}
          author="@sungtrending" />
      </grid-item>
      <grid-item>
        {/* <img style={{
          objectFit: "contain",
          overflow: 'hidden',
          maxWidth: "100%"
        }}
          src={finalranking} alt="hanbin final ranking" /> */}
        <FlipCard
          imgUrl={finalranking}
          msg={"Happiest Birthday to our brightest shining star Sung Hanbin 🌟. \
          I always think it's a blessing that I chance upon someone like you.\
          Initially, I took interest in you because of your dancing. But when I saw your bright\
          positive smile and kind acts on screen, that puts a the final stamp. Suddenly, I'm an\
          Allindan. To add to that, you are also talented and passionate!"}
          author="@byeolhanbitna"
        />
      </grid-item>
      <grid-item>
        {/* <img style={{
          objectFit: "contain",
          overflow: 'hidden',
          maxWidth: "100%"
        }}
          src={kconfanmeet} alt="hanbin kcon fanmeet" /> */}
        <FlipCard
          imgUrl={kconfanmeet}
          msg={"(Cont) Hanbin-a. Some people say being kind is a weakness, but I think it's your \
          biggest strength. It really takes a lot to be the biggest person. When you saw someone\
        else getting praised, you congratulate them first with a genuine smile. You give\
        the warmest comforting hugs, you speak words of encouragement. Sometimes actions \
        speak louder than words and your kindness and warmth can be felt even through the screen."} />
      </grid-item>
      <grid-item>
        {/* <img style={{
          objectFit: "contain",
          overflow: 'hidden',
          maxWidth: "100%"
        }}
          src={kconperf} alt="hanbin first fanmeet" /> */}
        <FlipCard
          imgBackUrl={hamster}
          imgUrl={kconperf}
        />
      </grid-item>
      <grid-item>
        {/* <img style={{
          objectFit: "contain",
          overflow: 'hidden',
          maxWidth: "100%"
        }}
          src={flook} alt="hanbin first fanmeet" /> */}
        <FlipCard
          imgUrl={flook}
          msg={"(Cont) I'm older than you but I always think there's a lot to learn from you as a person. \
          Your passion, your kindness, your brightness, your positivity, your warmth, your\
          friendliness. I've always said this time and time. I aspire to be someone like you. \n I'm sure as a person you also have moemtns when you are anxious, scared or sad. When things\
          are difficult always remember there are people who support you behind your back. Know that we will always have\
          each other. Let's walk this path together for a long time."}
        />
      </grid-item>





    </div>
  )
}
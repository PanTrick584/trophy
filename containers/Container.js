import { Grid } from './Grid'
import React, { useState } from 'react'
import { Img } from '@/components/Img/Img'
import { Text } from '@/components/Text'
import { Menu } from '@/components/Menu'

const Container = () => {

    const [language, setLanguage] = useState('en');

    const text1 = '...to upamiętnienie sukcesu, zachowana pamięć emocji w\u00A0momencie triumfu. Niezależnie czy powieszone na\u00A0ścianie, postawione na półce czy\u00A0sfotografowane —\u00A0stanowi symbol dominacji\u00A0i\u00A0przewagi.'
    const text2 = 'Mój dziadek zabrał swoich synów do\u00A0fotografa, żeby\u00A0zrobić zdjęcie złowionemu sandaczowi. Fotografie\u00A0również stały się trofeum. Z\u00A0mieszkania dziadków pamiętam ściany przedpokoju pełne wysuszonych, rybich głów. Dla mnie szczerzące się, rozwarte paszcze stada wodnych bestii -\u00A0dla\u00A0dziadka pamiątki dokonań, dokumentacja\u00A0osiągnięć.'
    const text3 = 'Kiedyś pokonanie dzikiego zwierzęcia było nie tylko manifestacją siły, a\u00A0także koniecznym środkiem do\u00A0przeżycia. Zjadano\u00A0je\u00A0i\u00A0zdobiono się biżuterią wykonaną ze\u00A0szczątków —\u00A0przypisywano jej mistyczne właściwości. Pokonując dzikie zwierzę, człowiek udowadniał odwagę i\u00A0zdolność do\u00A0zapewnienia pożywienia, dominację nad stworzeniami\u00A0natury.'
    const text4 = 'Patrząc martwemu zwierzęciu w\u00A0ślepia —\u00A0choćby sztuczne —\u00A0mierzymy się z\u00A0nim nawet po śmierci, oddajemy mu\u00A0szacunek. W\u00A0przeciwieństwie do\u00A0tego, czaszka pozbawiona oczu staje się upokorzeniem przeciwnika, pozbawieniem go\u00A0twarzy i\u00A0wyzywającego spojrzenia.  W\u00A0języku zrodził się strach przed dzikością i\u00A0bestią. Paradoskalnie mówimy o\u00A0"zezwierzęceniu", "zwierzęcej nienawiści", "bestialstwie", opisując swoje własne, wyjątkowe okrucieństwo spośród tworów\u00A0natury.'
    const text5 = 'W\u00A0przeciwieństwie do człowieka zwierzę bez świadomości śmierci jest w\u00A0pewien sposób nieśmertelne. Istotne pytanie dotyczy więc nie samej śmierci zwierzęcia, lecz cierpienia, które wydaje się tak niekonieczne. Dziś polowanie to\u00A0nic więcej jak teatr okrucieństwa z\u00A0mordowaniem za\u00A0kulisami — skryte przed oczami\u00A0widzów.'
    const text6 = 'Trofea zwierzęce, używane jako dekoracje na\u00A0ścianach, już nie mają na\u00A0celu manifestacji odwagi, lecz budowania wrażenie i\u00A0klimatu. Dawniej\u00A0świadczyły o\u00A0sile i\u00A0dominacji właściciela obecnie przekształciły się w\u00A0przedmioty konsumpcji i\u00A0dekoracji. Pełnią one jedynie rolę stylowego akcentu pluszowego cierpienia na\u00A0ścianie.'
    
    const text1en = '...it is a commemoration of success, a preserved memory of emotions at the moment of triumph. Regardless of whether it is hung on the wall, placed on a shelf or photographed - it is a symbol of domination and advantage.'
    const text2en = "My grandfather took his sons to a photographer to take a photo of a zander he caught. Photographs also became a trophy. From my grandparents' apartment, I remember the hall walls full of dried fish heads. For me, the grinning, gaping mouths of a herd of water beasts - for my grandfather, souvenirs of achievements, documentation of achievements."
    const text3en = "In the past, defeating a wild animal was not only a manifestation of strength, but also a necessary means of survival. They were eaten and decorated with jewelry made from the remains - it was believed to have mystical properties. By defeating a wild animal, a man demonstrated courage and the ability to provide food, domination over nature's creatures."
    const text4en = 'When we look at a dead animal with our eyes - even artificial ones - we face it even after death, we pay respect to it. In contrast, a skull without eyes becomes a humiliation of the opponent, depriving him of a face and a defiant look. Fear of wildness and beasts arose in the language. Paradoxically, we talk about "animalism", "animal hatred", "bestiality", describing our own, unique cruelty among the creations of nature.'
    const text5en = "Unlike humans, an animal without the consciousness of death is in some way immortal. The important question is therefore not about the animal's death itself, but about the suffering that seems so unnecessary. Today, hunting is nothing more than a theater of cruelty with murder behind the scenes - hidden from the eyes of viewers."
    const text6en = "Animal trophies used as wall decorations are no longer intended to demonstrate courage, but to create an impression and atmosphere. In the past, they testified to the power and domination of the owner, now they have transformed into objects of consumption and decoration. They only serve as a stylish accent to the plush suffering on the wall."

  return (
    <>
        {/* <Menu /> */}
        <Grid sectionNum={'header'}>
            <div onClick={() => setLanguage( prev => prev === 'pl' ? 'en' : 'pl')} className="language">
                {language}
            </div>
            <Img src={'header-1.jpg'} num={'one'} allowed={false}/>
            <Text text={ language === 'pl' ? 'Trofeum' : 'Trophy'}/>
        </Grid>
        <Grid sectionNum={'text'}>
            <Text text={language === 'pl' ? text1 : text1en}/>
        </Grid>
        <Grid sectionNum={'one'}>
            <Img src={'grand-1.jpg'} num={'one'}/>
            <Img src={'grand-2.jpg'} num={'two'}/>
            <Img src={'grand-3.jpg'} num={'three'}/>
            <Img src={'grand-4.jpg'} num={'four'}/>
        </Grid>
        <Grid sectionNum={'text'}>
            <Text text={language === 'pl' ? text2 : text2en}/>
        </Grid>
        <Grid sectionNum={'two'}>
            <Img src={'fish-1.jpg'} num={'one'}/>
            <Img src={'fish-2.jpg'} num={'two'}/>
            <Img src={'fish-3.jpg'} num={'three'}/>
            <Img src={'fish-4.jpg'} num={'four'}/>
            <Img src={'fish-5.jpg'} num={'five'}/>
            <Img src={'fish-8.jpg'} num={'eight'}/>
        </Grid>
        <Grid sectionNum={'three'}>
            <Img src={'fish-6.jpg'} num={'one'}/>
            <Img src={'fish-7.jpg'} num={'two'}/>
            <Text text={language === 'pl' ? text3 : text3en}/>
        </Grid>
        <Grid sectionNum={'full-one'}>
            <Img src={'header-2.jpg'} num={'one'} allowed={false}/>
        </Grid>
        <Grid sectionNum={'four'}>
            <Img src={'museum-pic-0-1.jpg'} num={'five'}/>
            <Img src={'found-28.jpg'} num={'two'}/>
            <Img src={'museum-pic-3-1.jpg'} num={'three'}/>
            <Img src={'museum-pic-8-1.jpg'} num={'four'}/>
            <Img src={'found-16.jpg'} num={'one'}/>
        </Grid>
        <Grid sectionNum={'five'}>
            <Img src={'museum-pic-4-1.jpg'} num={'one'}/>
            <Img src={'found-2.jpg'} num={'two'}/>
            <Img src={'museum-pic-5-1.jpg'} num={'three'}/>
            <Img src={'museum-pic-7-1.jpg'} num={'five'}/>
            <Img src={'museum-pic-1-1.jpg'} num={'six'}/>
        </Grid>
        <Grid sectionNum={'text'}>
            <Text text={language === 'pl' ? text4 : text4en}/>
        </Grid>
        <Grid sectionNum={'six'}>
            <Img src={'found-7.jpg'} num={'two'}/>
            <Img src={'piwnica-5.jpg'} num={'three'}/>
            <Img src={'found-14.jpg'} num={'four'}/>
        </Grid>
        <Grid sectionNum={'seven'}>
            <Img src={'found-5.jpg'} num={'one'}/>            
            <Img src={'piwnica-7.jpg'} num={'three'}/>
            <Img src={'found-9.jpg'} num={'four'}/>
            <Img src={'piwnica-1a.jpg'} num={'five'}/>
        </Grid>
        <Grid sectionNum={'full-two'}>
            <Img src={'header-3.jpg'} num={'one'} allowed={false}/>
        </Grid>
        <Grid sectionNum={'eight'}>
            <Img src={'piwnica-9.jpg'} num={'one'}/>
            <Img src={'piwnica-2a.jpg'} num={'two'}/>
           
            <Img src={'found-6.jpg'} num={'five'}/>
            <Img src={'found-8.jpg'} num={'six'}/>
        </Grid>
        <Grid sectionNum={'text'}>
            <Text text={language === 'pl' ? text5 : text5en}/>
        </Grid>
        <Grid sectionNum={'nine'}>
            <Img src={'found-13.jpg'} num={'two'}/>
            <Img src={'found-15.jpg'} num={'three'}/>
            <Img src={'found-1.jpg'} num={'five'}/>
        </Grid>
        <Grid sectionNum={'ten'}>
            <Img src={'found-19.jpg'} num={'one'}/>
            <Img src={'found-18.jpg'} num={'two'}/>
            <Img src={'found-25.jpg'} num={'four'}/>
        </Grid>
        <Grid sectionNum={'eleven'}>
            <Img src={'found-23.jpg'} num={'one'}/>
             <Img src={'PIWNICA-8.jpg'} num={'three'}/>
            <Img src={'found-26.jpg'} num={'four'}/>
            <Img src={'museum-pic-2-1.jpg'} num={'six'}/>
        </Grid>
        <Grid sectionNum={'twelve'}>
            <Img src={'found-21.jpg'} num={'one'}/>
            <Img src={'found-12.jpg'} num={'two'}/>
            <Img src={'found-17.jpg'} num={'five'}/>            
        </Grid>
        <Grid sectionNum={'thirteen'}>
            <Img src={'piwnica-6.jpg'} num={'four'}/>
            <Img src={'found-22.jpg'} num={'two'}/>
            <Img src={'found-29.jpg'} num={'one'}/>
        </Grid>
        <Grid sectionNum={'text'}>
            <Text text={language === 'pl' ? text6 : text6en}/>
        </Grid>
        <Grid sectionNum={'fourteen'}>
            <Img src={'header-4.jpg'} num={'one'} allowed={false}/>
        </Grid>
        <Grid sectionNum={'last'}>
            <h4>created by</h4>
            <h3>Patryk Chodacki</h3>
            <ul className='list'>
                <li className='list-item'><a href='mailto:chodacki.pc@gmail.com' target='_blank'>chodacki.pc@gmail.com</a></li>
                <li className='list-item'><a href='https://www.instagram.com/chodackipatryk/'>instagram@chodackipatryk</a></li>
            </ul>
            <h4 className='year'>2023</h4>
        </Grid>
    </>
  )
}

export default Container
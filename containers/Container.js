import { Grid } from './Grid'
import React from 'react'
import { Img } from '@/components/Img/Img'
import { Text } from '@/components/Text'
import { Menu } from '@/components/Menu'

const Container = () => {

    const text1 = '...to upamiętnienie sukcesu, zachowana pamięć emocji w\u00A0momencie triumfu. Niezależnie czy powieszone na\u00A0ścianie, postawione na półce czy\u00A0sfotografowane —\u00A0stanowi symbol dominacji\u00A0i\u00A0przewagi.'
    const text2 = 'Mój dziadek zabrał swoich synów do fotografa, żeby\u00A0zrobić zdjęcie złowionemu sandaczowi. Fotografie\u00A0również stały się trofeum. Z\u00A0mieszkania dziadków pamiętam ściany przedpokoju pełne wysuszonych, rybich głów. Dla mnie szczerzące się, rozwarte paszcze stada wodnych bestii -\u00A0dla\u00A0dziadka pamiątki dokonań, dokumentacja\u00A0osiągnięć.'
    const text3 = 'Kiedyś pokonanie dzikiego zwierzęcia było nie tylko manifestacją siły, a\u00A0także koniecznym środkiem do\u00A0przeżycia. Zjadano\u00A0je\u00A0i\u00A0zdobiono się biżuterią wykonaną ze\u00A0szczątków —\u00A0przypisywano jej mistyczne właściwości. Pokonując dzikie zwierzę, człowiek udowadniał odwagę i\u00A0zdolność do\u00A0zapewnienia pożywienia, dominację nad stworzeniami\u00A0natury.'
    const text4 = 'Patrząc martwemu zwierzęciu w\u00A0ślepia —\u00A0choćby sztuczne —\u00A0mierzymy się z\u00A0nim nawet po śmierci, oddajemy mu\u00A0szacunek. W\u00A0przeciwieństwie do\u00A0tego, czaszka pozbawiona oczu staje się upokorzeniem przeciwnika, pozbawieniem go\u00A0twarzy i\u00A0wyzywającego spojrzenia.  W\u00A0języku zrodził się strach przed dzikością i\u00A0bestią. Paradoskalnie mówimy o\u00A0"zezwierzęceniu", "zwierzęcej nienawiści", "bestialstwie", opisując swoje własne, wyjątkowe okrucieństwo spośród tworów\u00A0natury.'
    const text5 = 'W\u00A0przeciwieństwie do człowieka zwierzę bez świadomości śmierci jest w\u00A0pewien sposób nieśmertelne. Istotne pytanie dotyczy więc nie samej śmierci zwierzęcia, lecz cierpienia, które wydaje się tak niekonieczne. Dziś polowanie to\u00A0nic więcej jak teatr okrucieństwa z\u00A0mordowaniem za\u00A0kulisami — skryte przed oczami\u00A0widzów.'
    const text6 = 'Trofea zwierzęce, używane jako dekoracje na\u00A0ścianach, już nie mają na\u00A0celu manifestacji odwagi, lecz budowania wrażenie i\u00A0klimatu. Dawniej\u00A0świadczyły o\u00A0sile i\u00A0dominacji właściciela obecnie przekształciły się w\u00A0przedmioty konsumpcji i\u00A0dekoracji. Pełnią one jedynie rolę stylowego akcentu pluszowego cierpienia na\u00A0ścianie.'

  return (
    <>
        {/* <Menu /> */}
        <Grid sectionNum={'header'}>
            <Img src={'header-1a.jpg'} num={'one'}/>
            <Text text={'trofeum'}/>
        </Grid>
        <Grid sectionNum={'text'}>
            <Text text={text1}/>
        </Grid>
        <Grid sectionNum={'one'}>
            <Img src={'grand-1.jpg'} num={'one'}/>
            <Img src={'grand-2.jpg'} num={'two'}/>
            <Img src={'grand-3.jpg'} num={'three'}/>
            <Img src={'grand-4.jpg'} num={'four'}/>
        </Grid>
        <Grid sectionNum={'text'}>
            <Text text={text2}/>
        </Grid>
        <Grid sectionNum={'full'}>
            <Img src={'header-2.jpg'} num={'one'}/>
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
            <Text text={text3}/>
        </Grid>
        <Grid sectionNum={'full'}>
            <Img src={'header-3.jpg'} num={'one'}/>
        </Grid>
        <Grid sectionNum={'four'}>
            <Img src={'museum-pic-0-1.jpg'} num={'one'}/>
            <Img src={'found-28.jpg'} num={'two'}/>
            <Img src={'museum-pic-3-1.jpg'} num={'three'}/>
            <Img src={'museum-pic-8-1.jpg'} num={'four'}/>
            <Img src={'found-16.jpg'} num={'five'}/>
        </Grid>
        <Grid sectionNum={'five'}>
            <Img src={'museum-pic-4-1.jpg'} num={'one'}/>
            <Img src={'found-2.jpg'} num={'two'}/>
            <Img src={'museum-pic-5-1.jpg'} num={'three'}/>
            <Img src={'piwnica-6.jpg'} num={'four'}/>
            <Img src={'museum-pic-7-1.jpg'} num={'five'}/>
            <Img src={'museum-pic-1-1.jpg'} num={'six'}/>
        </Grid>
        <Grid sectionNum={'text'}>
            <Text text={text4}/>
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
        <Grid sectionNum={'eight'}>
            <Img src={'piwnica-9.jpg'} num={'one'}/>
            <Img src={'piwnica-2a.jpg'} num={'two'}/>
            <Img src={'PIWNICA-8.jpg'} num={'four'}/>
            <Img src={'found-6.jpg'} num={'five'}/>
            <Img src={'found-8.jpg'} num={'six'}/>
        </Grid>
        <Grid sectionNum={'text'}>
            <Text text={text5}/>
        </Grid>
        <Grid sectionNum={'nine'}>
            <Img src={'found-12.jpg'} num={'one'}/>
            <Img src={'found-13.jpg'} num={'two'}/>
            <Img src={'found-14.jpg'} num={'three'}/>
            <Img src={'found-15.jpg'} num={'four'}/>
            <Img src={'found-1.jpg'} num={'five'}/>
        </Grid>
        <Grid sectionNum={'ten'}>
            <Img src={'found-19.jpg'} num={'one'}/>
            <Img src={'found-18.jpg'} num={'two'}/>
            <Img src={'found-27.jpg'} num={'three'}/>

            <Img src={'found-25.jpg'} num={'four'}/>
        </Grid>
        <Grid sectionNum={'eleven'}>
            <Img src={'found-23.jpg'} num={'one'}/>
            <Img src={'museum-pic-2-1.jpg'} num={'six'}/>
            <Img src={'found-20.jpg'} num={'three'}/>
            <Img src={'found-26.jpg'} num={'four'}/>
            
        </Grid>
        <Grid sectionNum={'twelve'}>
             <Img src={'found-21.jpg'} num={'one'}/>
            <Img src={'found-22.jpg'} num={'two'}/>
            <Img src={'found-17.jpg'} num={'five'}/>
        </Grid>
        <Grid sectionNum={'text'}>
            <Text text={text6}/>
        </Grid>
        <Grid sectionNum={'full'}>
            <Img src={'header-4.jpg'} num={'one'}/>
        </Grid>
        {/* <Grid sectionNum={'full'}>
            <Text text={'Created by Patryk Chodacki'}/>
        </Grid> */}
    </>
  )
}

export default Container
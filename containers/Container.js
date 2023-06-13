import { Header } from '@/components/Header/Header'
import { SectionGrid } from './SectionGrid'
import React from 'react'
import { Img } from '@/components/Img/Img'
import { Text } from '@/components/Text'

const Container = () => {

    const text1 = 'W królestwie trofeów zwierzęcych kryje się wciągająca opowieść, która splata osobiste anegdoty, narracje historyczne i ewoluującą dynamikę współczesnej kultury. Wyruszmy w podróż, która odkrywa znaczenie tych trofeów w czasie'

  return (
    <>
        <SectionGrid sectionNum={'one-one'}>
            <Img src={'header-1a.jpg'} num={'one'}/>
            <Text text={'trofeum'}/>
        </SectionGrid>
        <SectionGrid sectionNum={'one-one-one'}>
            <Text text={text1}/>
        </SectionGrid>
        <SectionGrid sectionNum={'one'}>
            <Img src={'grand-1.jpg'} num={'one'}/>
            <Img src={'grand-2.jpg'} num={'two'}/>
            <Img src={'grand-3.jpg'} num={'three'}/>
            <Img src={'grand-4.jpg'} num={'four'}/>
        </SectionGrid>
        <SectionGrid sectionNum={'one-one-one'}>
            <Text text={text1}/>
        </SectionGrid>
        <SectionGrid sectionNum={'one-one'}>
            <Img src={'header-2.jpg'} num={'one'}/>
        </SectionGrid>
        <SectionGrid sectionNum={'two'}>
            <Img src={'fish-1.jpg'} num={'one'}/>
            <Img src={'fish-2.jpg'} num={'two'}/>
            <Img src={'fish-3.jpg'} num={'three'}/>
            <Img src={'fish-4.jpg'} num={'four'}/>
            <Img src={'fish-5.jpg'} num={'five'}/>
            <Img src={'fish-8.jpg'} num={'eight'}/>
        </SectionGrid>
        <SectionGrid sectionNum={'three'}>
            <Img src={'fish-6.jpg'} num={'one'}/>
            <Img src={'fish-7.jpg'} num={'two'}/>
            <Text text={text1}/>
        </SectionGrid>
        <SectionGrid sectionNum={'one-one'}>
            <Img src={'header-3.jpg'} num={'one'}/>
        </SectionGrid>
        <SectionGrid sectionNum={'four'}>
            <Img src={'museum-pic-0-1.jpg'} num={'one'}/>
            <Img src={'museum-pic-2-1.jpg'} num={'two'}/>
            <Img src={'museum-pic-3-1.jpg'} num={'three'}/>
            <Img src={'museum-pic-8-1.jpg'} num={'four'}/>
            <Img src={'found-1.jpg'} num={'five'}/>
        </SectionGrid>
        <SectionGrid sectionNum={'five'}>
            <Img src={'museum-pic-4-1.jpg'} num={'one'}/>
            <Img src={'found-2.jpg'} num={'two'}/>
            <Img src={'museum-pic-5-1.jpg'} num={'three'}/>
            <Img src={'piwnica-6.jpg'} num={'four'}/>
            <Img src={'museum-pic-7-1.jpg'} num={'five'}/>
            <Img src={'museum-pic-1-1.jpg'} num={'six'}/>
        </SectionGrid>
        <SectionGrid sectionNum={'six'}>
            <Text text={text1}/>
        </SectionGrid>
        <SectionGrid sectionNum={'one-one'}>
            <Img src={'header-4.jpg'} num={'one'}/>
        </SectionGrid>
        <SectionGrid sectionNum={'seven'}>
            <Img src={'found-5.jpg'} num={'one'}/>
            <Img src={'found-7.jpg'} num={'two'}/>
            <Img src={'piwnica-7.jpg'} num={'three'}/>
            <Img src={'found-9.jpg'} num={'four'}/>
            <Img src={'piwnica-1a.jpg'} num={'five'}/>
        </SectionGrid>
        <SectionGrid sectionNum={'eight'}>
            <Img src={'piwnica-9.jpg'} num={'one'}/>
            <Img src={'piwnica-2a.jpg'} num={'two'}/>
            <Img src={'piwnica-5.jpg'} num={'three'}/>
            <Img src={'PIWNICA-8.jpg'} num={'four'}/>
            <Img src={'found-6.jpg'} num={'five'}/>
            <Img src={'found-8.jpg'} num={'six'}/>
        </SectionGrid>
        {/* <SectionGrid sectionNum={'one-one'}>
            <Text text={text1}/>
        </SectionGrid> */}
        <SectionGrid sectionNum={'nine'}>
            <Img src={'found-12.jpg'} num={'one'}/>
            <Img src={'found-13.jpg'} num={'two'}/>
            <Img src={'found-14.jpg'} num={'three'}/>
            <Img src={'found-15.jpg'} num={'four'}/>
            <Img src={'found-16.jpg'} num={'five'}/>
        </SectionGrid>
        <SectionGrid sectionNum={'ten'}>
            <Img src={'found-19.jpg'} num={'one'}/>
            <Img src={'found-18.jpg'} num={'two'}/>
            <Img src={'found-17.jpg'} num={'three'}/>
            <Img src={'found-25.jpg'} num={'four'}/>
        </SectionGrid>
        <SectionGrid sectionNum={'eleven'}>
            <Img src={'found-23.jpg'} num={'one'}/>
            <Img src={'found-14.jpg'} num={'two'}/>
            <Img src={'found-20.jpg'} num={'three'}/>
            <Img src={'found-26.jpg'} num={'four'}/>
            <Img src={'found-27.jpg'} num={'five'}/>
            <Img src={'found-28.jpg'} num={'six'}/>
        </SectionGrid>
        <SectionGrid sectionNum={'twelve'}>
             <Img src={'found-21.jpg'} num={'one'}/>
            <Img src={'found-22.jpg'} num={'two'}/>
        </SectionGrid>
    </>
  )
}

export default Container
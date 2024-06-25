import { useContextProvider } from '../context/context.tsx';
import { Grid } from './Grid';
import { Img } from '../components/Img/Img.tsx';
import { Text } from '../components/Text.tsx';
import { Menu } from '../components/Menu.tsx';

const Container = () => {
    const {language} = useContextProvider();

  return (
    <div className='container'>
            <Menu />
        <Grid sectionNum={'header'}>
            <Img src={'header-1.jpg'} num={'one'} allowed={false}/>
            <Text text={ language === 'pl' ? 'Trofeum' : 'Trophy'}/>
        </Grid>
        <div className='container-thin-layout'>
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
        </div>
        <Grid sectionNum={'full-one'}>
            <Img src={'header-2.jpg'} num={'one'} allowed={false}/>
        </Grid>
        <div className='container-thin-layout'>
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
        </div>
        <Grid sectionNum={'full-two'}>
            <Img src={'header-3.jpg'} num={'one'} allowed={false}/>
        </Grid>
        <div className='container-thin-layout'>
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
        </div>
        <div className='container-thin-layout'>
            
        </div>
        
        <Grid sectionNum={'last'}>
            <h4>created by</h4>
            <h3>Patryk Chodacki</h3>
            <ul className='list'>
                <li className='list-item'><a href='mailto:chodacki.pc@gmail.com' target='_blank'>chodacki.pc@gmail.com</a></li>
                <li className='list-item'><a href='https://www.instagram.com/chodackipatryk/'>instagram@chodackipatryk</a></li>
            </ul>
            <h4 className='year'>2023</h4>
        </Grid>
    </div>
  )
}

export default Container
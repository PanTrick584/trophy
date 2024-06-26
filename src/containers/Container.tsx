import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import { useContextProvider } from '../context/context';

import './styles/container.scss';
import Main from './Main';

const Container = () => {
    const {language} = useContextProvider();

  return (
    <div className='container'>
        <div className="container-layout">
            <Menu />
            <Header
                headerImg={'header-1.jpg'}
                headerText={language === 'pl' ? 'Trofeum' : 'Trophy'}
            />
            <Main />
            <Footer />

        </div>
            {/* <Grid sectionNum={'text'}>
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
            </Grid> */}
        {/* <Grid sectionNum={'full-one'}>
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
        </Grid> */}
        {/* <div className='container-thin-layout'>
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
*/}
    </div>
  )
}

export default Container
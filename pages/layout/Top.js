import { Icon } from 'semantic-ui-react'

export default function Top(props) {
    const isOpenGnb = props.isOpenGnb;
    const setIsOpenGnb = props.setIsOpenGnb;

    return (
    <div className="header">
        <div className="inner flex-center">
            <Icon name='list' className="color-white" onClick={()=>setIsOpenGnb(true)}/>
            <h1>EUNEUN'S THUMBNAIL GENERATOR</h1>
        </div>
    </div>
    )
}

import styled from 'styled-components';
import posed from 'react-pose';

const ModalPoseContainer = posed.div({
    enter: {
        x:0,
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
            y: { type: 'spring', stiffness: 1000, damping: 15 },
            default: { duration: 300 }
        }
    },
    exit: {
        x:0,
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
    }
});

export const WrapperModal = styled(ModalPoseContainer)`
    width: 500px;
    position: absolute;
    top:40px;
    left:0px;
    right:0px;
    margin: auto;
`

export const Modal = styled.div`
    width: 500px;
    border-radius: 10px;
    background: white;
    div{
        padding: 10px;
    }
`

export const ModalHead = styled.div`
    height:50px;
    display:flex;
    align-items: center;
    border-bottom:1px solid #e7e7e7;
`

export const ModalName = styled.div`
`

export const ModalBody = styled.div`
`

export const ModalFoot = styled.div`
    border-top:1px solid #e7e7e7;
    text-align:right;
`

const ShadeContainer = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
});

export const Shade = styled(ShadeContainer)`
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
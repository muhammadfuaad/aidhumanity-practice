import './switch.css';


function Switch({type}) {

    if(type != 'dashboard'){

        return (

            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>      
    
        );

    } else{
    return (

        <label class="switch2">
            <input type="checkbox" />
            <span class="slider2 round2"></span>
        </label>      

    );
    }
}

export default Switch;
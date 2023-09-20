import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {

    const { name, price, features } = option

    return (
        <div className='mt-4 flex flex-col text-center bg-slate-300 rounded-md px-2 py-2 border-4  border-slate-800'>
            <h2>
                <span className='text-7xl'>{price}</span>
            </h2>
            <h4 className='text-2xl mt-2'>
                {name} :</h4>
                <div className='flex-grow'>
                    {
                        features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                    }
                </div>
            
            <button className='mt-4 bg-slate-700 text-white p-3 rounded-md w-full hover:bg-slate-800'>Purches</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;
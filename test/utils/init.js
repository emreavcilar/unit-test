import enzyme from 'enzyme/build/index';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

enzyme.configure({ adapter: new Adapter() });

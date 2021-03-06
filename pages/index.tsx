import { useTheme } from '@material-ui/core/styles';
import { Button } from '../components/button';

const Home = () => {
  const theme = useTheme();
  const hello = "Hello"
  return <>
    <div style={{ color: theme.palette.primary.main }}>{hello}</div>
    <Button name="Click Me" color="primary" />
  </>
}

export default Home;

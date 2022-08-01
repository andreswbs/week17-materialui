import Button from '@mui/material/Button';
import './App.css';
import RecipeReviewCard from './components/RecipeReviewCard';

function App() {
  return (
    <div className="App">
      <Button className="myColors" variant="contained">By me a coffee!</Button>
      <Button variant="text">By me a second coffee!</Button>
      <Button color="error" variant="outlined" size="large">By me a third coffee!</Button>
      <RecipeReviewCard pictureUrl={'https://mui.com/static/images/cards/paella.jpg'} />
    </div>
  );
}

export default App;

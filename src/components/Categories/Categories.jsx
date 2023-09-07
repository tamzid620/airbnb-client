import Filter from '../Filter/Filter';
import Container from '../Shared/Container/Container';
import CategoryCart from './CategoryCart';
import { categories } from './categoriesData'
import { useSearchParams } from 'react-router-dom'

const Categories = () => {
  const [params, setParams] = useSearchParams()
  const category = params.get('category')

  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {
          categories.map(item => (
            <CategoryCart
              label={item.label}
              icon={item.icon}
              key={item.label}
              selected={category === item.label}
            />
          ))

        }
        <div>
          <Filter/>
        </div>
      </div>
    </Container>
  );
};

export default Categories;
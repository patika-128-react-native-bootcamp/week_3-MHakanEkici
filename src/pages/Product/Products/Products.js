import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ProductCard from '../../../components/cards/ProductCard/ProductCard';
import mockData from '../../../MOCK_DATA.json';
import routes from '../../../navigation/routes';

export default function Products() { 
  const navigation = useNavigation();

  function navigate(selectedProduct) {
    navigation.navigate(routes.PRODUCT_DETAIL_PAGE, {product: selectedProduct});
  }

  const renderProducts = ({item}) => (
    <ProductCard item={item} onSelect={() => navigate(item)} />
  );

  return (
    <SafeAreaView>
      <FlatList data={mockData.products} renderItem={renderProducts} />
    </SafeAreaView>
  );
}

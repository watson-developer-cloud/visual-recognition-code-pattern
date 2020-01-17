export const getTopTenClasses = (classifyResults) => {
  const unsortedItems = classifyResults[0].classes;
  const sortedItems = unsortedItems.sort((a, b) => b.score - a.score);
  return sortedItems.slice(0,10);
}

export const parseClassifyResponse = (classifyResponse) => {
  return classifyResponse.result.images[0].classifiers;
}

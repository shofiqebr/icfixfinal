export const loader = async () => {
  const groupsData = await fetch(
    `https://erpmethods.vercel.app/gets/Item Group?filters=[["show_in_website", "=", 1]]&fields=["route","name", "image"]`,
    {
      method: "GET",
      headers: {
        url: "https://erp.icfix.com.bd/",
        api_secret: "f177dc5a13eef46",
        api_key: "fb6a7b744acef86",
      },
    }
  );
  // console.log(groupsData);
  const groups = await groupsData.json();

  const itemsData = await fetch(`https://erpmethods.vercel.app/gets/Website Item?filters=[["published", "=", 1]]`, {
    method: "GET",
    headers: {
      url: "https://erp.icfix.com.bd/",
      api_secret: "f177dc5a13eef46",
      api_key: "fb6a7b744acef86",
    },
  });
  const webItems = await itemsData.json();

  const itmRate = await fetch(
    `https://erpmethods.vercel.app/gets/Item?filters=[["published_in_website", "=", 1]]&fields=["*"]`,
    {
      method: "GET",
      headers: {
        url: "https://erp.icfix.com.bd/",
        api_secret: "f177dc5a13eef46",
        api_key: "fb6a7b744acef86", 
      },
    }
  );
  const items = await itmRate.json();
// console.log(groups, webItems,items);
  return {groups, webItems, items};
};

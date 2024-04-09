export async function getData(category: string | null = null) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  let data = [{
    "id": "a4da94be-cb64-4843-84ec-cca2c63d0783",
    "title": "Rodriguez Group",
    "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "rating": 0.3,
    "category": "restaurant"
  }, {
    "id": "c914f518-fe34-406f-b02b-32399fe4e405",
    "title": "Boehm Inc",
    "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "rating": 2.3,
    "category": "photographer"
  }, {
    "id": "3c4a0f24-a95f-4f69-af63-ff43e53d4970",
    "title": "Durgan and Sons",
    "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    "rating": 2.5,
    "category": "florist"
  }, {
    "id": "8b8953e8-27ef-407a-8ede-189d9c78642d",
    "title": "Mohr, Gislason and Treutel",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "rating": 2.8,
    "category": "photographer"
  }, {
    "id": "5155e52e-0493-49c7-9237-a9730954a669",
    "title": "Bradtke Group",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    "rating": 2.3,
    "category": "restaurant"
  }, {
    "id": "a9719bfc-7e6a-4215-9f1c-72364d088254",
    "title": "Legros, Kshlerin and Gerlach",
    "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    "rating": 1.0,
    "category": "restaurant"
  }, {
    "id": "f206dd0d-aad1-4bac-963e-eae4e441b7dd",
    "title": "Auer LLC",
    "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "rating": 1.0,
    "category": "restaurant"
  }, {
    "id": "9f0d296d-196d-42c8-b976-353c046a294e",
    "title": "Lockman, Frami and Feeney",
    "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "rating": 1.1,
    "category": "restaurant"
  }, {
    "id": "d62617c4-e3ab-4b56-96c9-81896fc0547d",
    "title": "Hackett, Breitenberg and Turcotte",
    "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    "rating": 2.6,
    "category": "photographer"
  }, {
    "id": "325ca0ef-9063-436c-b12e-f381e041ecee",
    "title": "Johnson Group",
    "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "rating": 4.3,
    "category": "photographer"
  }]

  if (category !== null) {
    data = data.filter(entry => entry.category === category);
  }

  return data;
}
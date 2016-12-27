export const PAGES_MENU = [
//首頁
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: '首頁',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
//我的工作      
      {
        path: 'editors',
        data: {
          menu: {
            title: '我的工作',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: '工作清單',
              }
            }
          },
          {
            path: 'message-contact',
            data: {
              menu: {
                title: '訊息往來',
              }
            }
          }
        ]
      },
//日常作業
      {

       path: 'charts',
       data: {
         menu: {
           title: '日常作業',
           icon: 'ion-gear-a',
           selected: false,
           expanded: false,
           order: 250,
         }
       },
       children: [
         {
           path: 'order',
           data: {
             menu: {
               title: '訂驗退作業',
             }
           }
         },

         {
            path: 'promotions',
            data: {
              menu: {
                title: '促銷確認單'
              }
            }
          },
          {
            path: 'gift',
            data: {
              menu: {
                title: '贈品確認單',
              }
            }
          },
          {
            path: 'commodityManagement',
            data: {
              menu: {
                title: '網路商品管理',
              }
            }
          }
       ]

      },
//管理分析      
      {
        path: 'charts1',
        data: {
          menu: {
            title: '管理分析',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'Chartist.Js',
              }
            }
          }
        ]
      },
//發票核對      
      {
        path: 'ui',
        data: {
          menu: {
            title: '發票核對',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'Typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'Buttons',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: '訊息往來',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'Modals',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'Grid',
              }
            }
          },
        ]
      },
//數據中心      
      {
        path: 'forms',
        data: {
          menu: {
            title: '數據中心',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'Form Inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'Form Layouts',
              }
            }
          }
        ]
      },
//平台設定      
      {
        path: 'tables',
        data: {
          menu: {
            title: '平台設定',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'Basic Tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'Smart Tables',
              }
            }
          }
        ]
      },
//廠商申請      
      {
        path: 'maps',
        data: {
          menu: {
            title: '廠商申請',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'Google Maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'Leaflet Maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'Bubble Maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'Line Maps',
              }
            }
          }
        ]
      },
//財務作業      
      {
        path: '',
        data: {
          menu: {
            title: '財務作業',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'Register'
              }
            }
          }
        ]
      },
//新品作業      
      {
        path: '',
        data: {
          menu: {
            title: '新品作業',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'Menu Level 1.2.1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
//我的報表      
      {
        path: '',
        data: {
          menu: {
            title: '我的報表',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];

export const PAGES_MENU2 = [
//首頁
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: '首頁123',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
//我的工作      
      {
        path: 'editors',
        data: {
          menu: {
            title: '我的工作',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: '工作清單',
              }
            }
          },
          {
            path: 'message-contact',
            data: {
              menu: {
                title: '訊息往來',
              }
            }
          }
        ]
      },
//日常作業
      {

       path: 'charts',
       data: {
         menu: {
           title: '日常作業',
           icon: 'ion-gear-a',
           selected: false,
           expanded: false,
           order: 250,
         }
       },
       children: [
         {
           path: 'order',
           data: {
             menu: {
               title: '訂驗退作業',
             }
           }
         },

         {
            path: 'promotions',
            data: {
              menu: {
                title: '促銷確認單'
              }
            }
          },
          {
            path: 'gift',
            data: {
              menu: {
                title: '贈品確認單',
              }
            }
          },
          {
            path: 'commodityManagement',
            data: {
              menu: {
                title: '網路商品管理',
              }
            }
          }
       ]

      },
//管理分析      
      {
        path: 'charts1',
        data: {
          menu: {
            title: '管理分析',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'Chartist.Js',
              }
            }
          }
        ]
      },
//發票核對      
      {
        path: 'ui',
        data: {
          menu: {
            title: '發票核對',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'Typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'Buttons',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: '訊息往來',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'Modals',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'Grid',
              }
            }
          },
        ]
      },
//數據中心      
      {
        path: 'forms',
        data: {
          menu: {
            title: '數據中心',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'Form Inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'Form Layouts',
              }
            }
          }
        ]
      },
//平台設定      
      {
        path: 'tables',
        data: {
          menu: {
            title: '平台設定',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'Basic Tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'Smart Tables',
              }
            }
          }
        ]
      },
//廠商申請      
      {
        path: 'maps',
        data: {
          menu: {
            title: '廠商申請',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'Google Maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'Leaflet Maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'Bubble Maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'Line Maps',
              }
            }
          }
        ]
      },
//財務作業      
      {
        path: '',
        data: {
          menu: {
            title: '財務作業',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'Register'
              }
            }
          }
        ]
      },
//新品作業      
      {
        path: '',
        data: {
          menu: {
            title: '新品作業',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'Menu Level 1.2.1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
//我的報表      
      {
        path: '',
        data: {
          menu: {
            title: '我的報表',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];

import {
  Airplay,
  BarChart,
  Box,
  MessageCircle,
  CheckSquare,
  Clock,
  Cloud,
  Command,
  Edit,
  FileText,
  Film,
  FolderPlus,
  GitPullRequest,
  Heart,
  HelpCircle,
  Home,
  Image,
  Layers,
  List,
  Mail,
  Map,
  Monitor,
  Package,
  Radio,
  Server,
  Sunrise,
  Users,
  Zap,
  ShoppingBag,
} from "react-feather";

export const MENU = [
  {
    className: "menu-box",
    menu: [
      {
        title: "Dashboards",
        icon: <Home />,
        class: "lan-3",
        menu: [
          {
            title: "Default",
            url: `${process.env.PUBLIC_URL}/dashboard/default`,
            class: "lan-4",
            type: "link",
          },
          {
            title: "Ecommerce",
            url: `${process.env.PUBLIC_URL}/dashboard/ecommerce`,
            type: "link",
            class: "lan-5",
          },
        ],
      },
      {
        title: "Widgets",
        icon: <Airplay />,
        class: "lan-6",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/widgets/general`,
            type: "link",
            title: "General",
          },
          {
            url: `${process.env.PUBLIC_URL}/widgets/chart`,
            type: "link",
            title: "Chart",
          },
        ],
      },
      {
        title: "Ecommerce",
        icon: <ShoppingBag />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/product`,
            title: "Product",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/product-page/1`,
            title: "Product Page",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/product-list`,
            title: "Product List",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/Add-product`,
            title: "Add Product",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/payment-details`,
            title: "Payment Detail",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/orderhistory`,
            title: "Order History",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/pricing`,
            title: "Pricing",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/invoice`,
            title: "Invoice",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/cart`,
            title: "Cart",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/checkout`,
            title: "Checkout",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/whishlist`,
            title: "Wishlist",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    className: "menu-box",
    menu: [
      {
        title: "Chat",
        icon: <MessageCircle />,
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/chat-app`,
            type: "link",
            title: "Chat App",
          },
          {
            url: `${process.env.PUBLIC_URL}/video-chat-app`,
            type: "link",
            title: "Video App",
          },
        ],
      },
      {
        title: "Email",
        icon: <Mail />,
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/email-app`,
            type: "link",
            title: "Mail Inbox",
          },
          {
            url: `${process.env.PUBLIC_URL}/email/readmail`,
            type: "link",
            title: "Read Mail",
          },
          {
            url: `${process.env.PUBLIC_URL}/email-app/compose`,
            type: "link",
            title: "Compose",
          },
        ],
      },
      {
        url: `${process.env.PUBLIC_URL}/file-manager`,
        icon: <GitPullRequest />,
        title: "File Manager",
        type: "link",
        bookmark: true,
      },
      {
        url: `${process.env.PUBLIC_URL}/kanban-board`,
        icon: <Monitor />,
        type: "link",
        title: "Kanban Board",
      },
      {
        url: `${process.env.PUBLIC_URL}/bookmark`,
        icon: <Heart />,
        bookmark: true,
        type: "link",
        title: "Bookmark",
      },
      {
        url: `${process.env.PUBLIC_URL}/contact`,
        icon: <List />,
        type: "link",
        title: "Contacts",
      },
      {
        url: `${process.env.PUBLIC_URL}/task`,
        icon: <CheckSquare />,
        type: "link",
        title: "Task",
      },
      {
        url: `${process.env.PUBLIC_URL}/social-app`,
        icon: <Zap />,
        title: "Social App",
        type: "link",
        bookmark: true,
      },

      {
        url: `${process.env.PUBLIC_URL}/todo-app/todo`,
        icon: <Clock />,
        type: "link",
        title: "To-Do",
      },
    ],
  },
  {
    className: "menu-box",
    menu: [
      {
        title: "Forms",
        icon: <FileText />,
        menu: [
          {
            title: "Form Controls",
            menu: [
              {
                title: "Form Validation",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-validation`,
              },
              {
                title: "Basic Input",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/baseInput`,
              },
              {
                title: "Checkbox & Radio",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/radio-checkbox`,
              },
              {
                title: "Input Groups",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/inputGroup`,
              },
              {
                title: "Mega Option",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/megaOptions`,
              },
            ],
          },
          {
            title: "Form Widgets",
            menu: [
              {
                title: "Datepicker",
                type: "link",

                url: `${process.env.PUBLIC_URL}/form-widget/datepicker`,
              },
              {
                title: "Typeahead",
                type: "link",

                url: `${process.env.PUBLIC_URL}/form-widget/typeahead`,
              },
              {
                title: "Rangepicker",
                type: "link",

                url: `${process.env.PUBLIC_URL}/form-widget/rangepicker`,
              },
              {
                title: "Touchspin",
                type: "link",

                url: `${process.env.PUBLIC_URL}/form-widget/touchspin`,
              },
              {
                title: "Select2",
                type: "link",

                url: `${process.env.PUBLIC_URL}/form-widget/select`,
              },
              {
                title: "Switch",
                type: "link",

                url: `${process.env.PUBLIC_URL}/form-widget/switch`,
              },
              {
                title: "Clipboard",
                type: "link",

                url: `${process.env.PUBLIC_URL}/form-widget/clipboard`,
              },
            ],
          },
          {
            title: "Form Layout",
            menu: [
              {
                url: `${process.env.PUBLIC_URL}/form-layout/formDefault`,
                type: "link",
                title: "Form Default",
              },
              {
                url: `${process.env.PUBLIC_URL}/form-layout/formWizard`,
                type: "link",
                title: "Form Wizard",
              },
            ],
          },
        ],
      },
      {
        title: "Tables",
        icon: <Server />,
        menu: [
          {
            title: "React Strap Table",
            url: `${process.env.PUBLIC_URL}/table/reactstraptable`,
            type: "link",
          },
          {
            title: "Data Tables",
            type: "link",
            url: `${process.env.PUBLIC_URL}/table/datatable`,
          },
        ],
      },
    ],
  },
  {
    className: "menu-box",
    menu: [
      {
        title: "Ui-Kits",
        icon: <Box />,
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/typography`,
            title: "Typography",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/avatar`,
            title: "Avatars",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/helperclass`,
            title: "Helper-Classes",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/grid`,
            title: "Grid",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/tagsandpills`,
            title: "Tag & Pills",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/progress-bar`,
            title: "Progress",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/modal`,
            title: "Modal",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/alert`,
            title: "Alert",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/popover`,
            title: "Popover",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/tooltips`,
            title: "Tooltip",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/spinner`,
            title: "Spinners",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/dropdown`,
            title: "Dropdown",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/accordion`,
            title: "Accordion",
            type: "link",
          },
          {
            title: "Tabs",
            type: "sub",
            menu: [
              {
                title: "Bootstrap Tabs",
                type: "link",
                url: `${process.env.PUBLIC_URL}/ui-kits/tab-bootstrap`,
              },
              {
                title: "Line Tabs",
                type: "link",
                url: `${process.env.PUBLIC_URL}/ui-kits/tab-line`,
              },
            ],
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/shadow`,
            title: "Shadow",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/list`,
            title: "List",
            type: "link",
          },
        ],
      },
      {
        title: "Bonus Ui",
        type: "sub",
        icon: <FolderPlus />,
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`,
            type: "link",
            title: "Scrollable",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/treeview`,
            type: "link",
            title: "Tree",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/rating`,
            type: "link",
            title: "Rating",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/dropzone`,
            type: "link",
            title: "Dropzone",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/tourComponent`,
            type: "link",
            title: "Tour",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/sweetAlert`,
            type: "link",
            title: "SweetAlert",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/ribbons`,
            type: "link",
            title: "Ribbons",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/pagination`,
            type: "link",
            title: "Pagination",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/breadcrumb`,
            type: "link",
            title: "Breadcrumb",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/rangeSlider`,
            type: "link",
            title: "Range Slider",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/imageCropper`,
            type: "link",
            title: "Image Cropper",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/stickyNotes`,
            type: "link",
            title: "Sticky",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/dragNDropComp`,
            type: "link",
            title: "Drag and Drop",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/image-upload`,
            type: "link",
            title: "Upload",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/card/basicCards`,
            type: "link",
            title: "Basic Card",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/card/draggingCards`,
            type: "link",
            title: "Draggable Card",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/timelines/timeline1`,
            type: "link",
            title: "Timeline",
          },
        ],
      },
      {
        title: "Icons",
        icon: <Command />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/icons/flagIcons`,
            type: "link",
            title: "Flag Icon",
          },
          {
            url: `${process.env.PUBLIC_URL}/icons/fontAwsomeIcon`,
            type: "link",
            title: "Font awesome Icon",
          },
          {
            url: `${process.env.PUBLIC_URL}/icons/icoIcons`,
            type: "link",
            title: "Ico Icon",
          },
          {
            url: `${process.env.PUBLIC_URL}/icons/themifyIcons`,
            type: "link",
            title: "Themify Icon",
          },
          {
            url: `${process.env.PUBLIC_URL}/icons/featherIcons`,
            type: "link",
            title: "Feather Icon",
          },
          {
            url: `${process.env.PUBLIC_URL}/icons/weatherIcons`,
            type: "link",
            title: "Whether Icon",
          },
        ],
      },
      {
        title: "Buttons",
        icon: <Cloud />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/buttons/default-btn`,
            type: "link",
            title: "Default Style",
          },
          {
            url: `${process.env.PUBLIC_URL}/buttons/groupBtn`,
            type: "link",
            title: "Button Group",
          },
        ],
      },
      {
        title: "Charts",
        icon: <BarChart />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/charts/apexCharts`,
            type: "link",
            title: "Apex Chart",
          },
          {
            url: `${process.env.PUBLIC_URL}/charts/googleChart`,
            type: "link",
            title: "Google Chart",
          },
          {
            url: `${process.env.PUBLIC_URL}/charts/chartJs`,
            type: "link",
            title: "Chartjs",
          },
          {
            url: `${process.env.PUBLIC_URL}/charts/chartistComponent`,
            type: "link",
            title: "Chartist",
          },
        ],
      },
    ],
  },
  {
    className: "menu-box",
    menu: [
      {
        url: `${process.env.PUBLIC_URL}/samplepage`,
        icon: <Layers />,
        title: "Sample Page",
        type: "sub",
      },
      {
        title: "Others",
        icon: <Layers />,
        type: "sub",
        menu: [
          {
            title: "Error Page",
            type: "sub",
            menu: [
              {
                title: "Error Page 1",
                type: "link",
                url: `${process.env.PUBLIC_URL}/error/error-page1`,
              },
              {
                title: "Error Page 2",
                type: "link",
                url: `${process.env.PUBLIC_URL}/error/error-page2`,
              },
              {
                title: "Error Page 3",
                type: "link",
                url: `${process.env.PUBLIC_URL}/error/error-page3`,
              },
              {
                title: "Error Page 4",
                type: "link",
                url: `${process.env.PUBLIC_URL}/error/error-page4`,
              },
              {
                title: "Error Page 5",
                type: "link",
                url: `${process.env.PUBLIC_URL}/error/error-page5`,
              },
            ],
          },
          {
            title: "Coming Soon",
            type: "sub",

            menu: [
              {
                title: "Coming Sample",
                type: "link",
                url: `${process.env.PUBLIC_URL}/coming/comingsimple`,
              },
              {
                title: "Coming with Bg-video",
                type: "link",
                url: `${process.env.PUBLIC_URL}/coming/comingbgvideo`,
              },
              {
                title: "Coming with Bg-Image",
                type: "link",
                url: `${process.env.PUBLIC_URL}/coming/comingbgimage`,
              },
            ],
          },
          {
            title: "Authentication",
            type: "sub",

            menu: [
              {
                title: "Login Simple",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/login-simple`,
              },
              {
                title: "Login With bg image",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/login-img`,
              },
              {
                title: "Login with image two",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/login-bg-img`,
              },
              {
                title: "Login with validation",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/login-validation`,
              },
              {
                title: "Login with tooltip",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/login-tooltip`,
              },
              {
                title: "Login with sweetaleart",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/login-sweetalert`,
              },
              {
                type: "link",
                title: "Register Simple",

                url: `${process.env.PUBLIC_URL}/authentication/register-simpleimg`,
              },
              {
                title: "Register with Bg image",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/register-bg-img`,
              },
              {
                title: "Register with Bg Video",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/register-video`,
              },
              {
                title: "Unlock User",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/unlock-user`,
              },
              {
                title: "Forgot Password",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/forget-pwd`,
              },
              {
                title: "Create Passward",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/create-pwd`,
              },
              {
                title: "Maintenance",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/maintenance`,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    className: "menu-box",
    menu: [
      {
        icon: <Image />,
        title: "Gallery",
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/gallery/imageGallery`,
            title: "Gallery Grid",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/gallery/imageWithDesc`,
            type: "link",
            title: "Gallery Grid  Desc",
          },
          {
            url: `${process.env.PUBLIC_URL}/gallery/mesonryGallery`,
            type: "link",
            title: "Masonry Gallery",
          },
          {
            url: `${process.env.PUBLIC_URL}/gallery/mesonryDesc`,
            type: "link",
            title: "Masonry With Desc",
          },
          {
            url: `${process.env.PUBLIC_URL}/gallery/imageHover`,
            type: "link",
            title: "Hover Effect",
          },
        ],
      },
      {
        icon: <Film />,
        title: "Blog",
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/blog/blogDetail`,
            type: "link",
            title: "Blog Details",
          },
          {
            url: `${process.env.PUBLIC_URL}/blog/blogSingle`,
            type: "link",
            title: "Blog Single",
          },
          {
            url: `${process.env.PUBLIC_URL}/blog/blogPost`,
            type: "link",
            title: "Add Post",
          },
        ],
      },
      {
        icon: <Package />,
        title: "Job Search",
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/jobSearch/cardView`,
            type: "link",
            title: "Cards View",
          },
          {
            url: `${process.env.PUBLIC_URL}/jobSearch/job-list`,
            type: "link",
            title: "List View",
          },
          {
            url: `${process.env.PUBLIC_URL}/jobSearch/job-detail`,
            type: "link",
            title: "Job Details",
          },
          {
            url: `${process.env.PUBLIC_URL}/jobSearch/job-apply`,
            type: "link",
            title: "Apply",
          },
        ],
      },
      {
        icon: <Radio />,
        title: "Learning",
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/learning/learning-list`,
            type: "link",
            title: "Learning List",
          },
          {
            url: `${process.env.PUBLIC_URL}/learning/learning-detail`,
            type: "link",
            title: "Detail Course",
          },
        ],
      },
      {
        title: "Maps",
        icon: <Map />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/map/googleMap`,
            type: "link",
            title: "Google Maps",
          },
          {
            url: `${process.env.PUBLIC_URL}/map/pigeonMap`,
            type: "link",
            title: "Pigeon Maps",
          },
        ],
      },
      {
        title: "Editor",
        icon: <Edit />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/editor/ckEditor`,
            type: "link",
            title: "CK  Editor",
          },
          {
            url: `${process.env.PUBLIC_URL}/editor/mdeEditor`,
            type: "link",
            title: "MDE Editor",
          },
          {
            url: `${process.env.PUBLIC_URL}/editor/acecodeeditor`,
            type: "link",
            title: "ACE code editor",
          },
        ],
      },
      {
        url: `${process.env.PUBLIC_URL}/faq`,
        icon: <HelpCircle />,
        title: "FAQ",
        type: "link",
      },
      {
        title: "knowledgebase",
        icon: <Sunrise />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/knowledgebase/knowledgebase`,
            type: "link",
            title: "knowledgebase",
          },
          {
            url: `${process.env.PUBLIC_URL}/knowledgebase/KnowledgeCategory`,
            type: "link",
            title: "KnowledgeCategory",
          },
          {
            url: `${process.env.PUBLIC_URL}/knowledgebase/KnowledgeDetailContain`,
            type: "link",
            title: "KnowledgeDetail",
          },
        ],
      },
      {
        url: `${process.env.PUBLIC_URL}/support-ticket`,
        icon: <Users />,
        type: "link",
        title: "Support Ticket",
      },
    ],
  },
];
export const SEARCHMENU = [
  {
    className: "menu-box",
    menu: [
      {
        title: "Dashboards",
        icon: <Home />,
        class: "lan-3",
        menu: [
          {
            title: "Default",
            url: `${process.env.PUBLIC_URL}/dashboard/default`,
            class: "lan-4",
            type: "link",
          },
          {
            title: "Ecommerce",
            url: `${process.env.PUBLIC_URL}/dashboard/ecommerce`,
            type: "link",
            class: "lan-5",
          },
        ],
      },
      {
        title: "Widgets",
        icon: <Airplay />,
        class: "lan-6",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/widgets/general`,
            type: "link",
            title: "General",
            bookmark:true,
          },
          {
            url: `${process.env.PUBLIC_URL}/widgets/chart`,
            type: "link",
            title: "Chart",
          },
        ],
      },
      {
        title: "Ecommerce",
        icon: <ShoppingBag />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/product`,
            title: "Product",
            type: "link",
            bookmark:true,
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/product-page/1`,
            title: "Product Page",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/product-list`,
            title: "Product List",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/Add-product`,
            title: "Add Product",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/payment-details`,
            title: "Payment Detail",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/orderhistory`,
            title: "Order History",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/pricing`,
            title: "Pricing",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/invoice`,
            title: "Invoice",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/cart`,
            title: "Cart",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/checkout`,
            title: "Checkout",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ecommerce/whishlist`,
            title: "Wishlist",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    className: "menu-box",
    menu: [
      {
        title: "Chat",
        icon: <MessageCircle />,
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/chat-app`,
            type: "link",
            title: "Chat App",
          },
          {
            url: `${process.env.PUBLIC_URL}/video-chat-app`,
            type: "link",
            title: "Video App",
          },
        ],
      },
      {
        title: "Email",
        icon: <Mail />,
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/email-app`,
            type: "link",
            title: "Mail Inbox",
          },
          {
            url: `${process.env.PUBLIC_URL}/email/readmail`,
            type: "link",
            title: "Read Mail",
          },
          {
            url: `${process.env.PUBLIC_URL}/email-app/compose`,
            type: "link",
            title: "Compose",
          },
        ],
      },
      {
        url: `${process.env.PUBLIC_URL}/file-manager`,
        icon: <GitPullRequest />,
        title: "File Manager",
        type: "link",
        bookmark: true,
      },
      {
        url: `${process.env.PUBLIC_URL}/kanban-board`,
        icon: <Monitor />,
        type: "link",
        title: "Kanban Board",
      },
      {
        url: `${process.env.PUBLIC_URL}/bookmark`,
        icon: <Heart />,
        bookmark: true,
        type: "link",
        title: "Bookmark",
      },
      {
        url: `${process.env.PUBLIC_URL}/contact`,
        icon: <List />,
        type: "link",
        title: "Contacts",
      },
      {
        url: `${process.env.PUBLIC_URL}/task`,
        icon: <CheckSquare />,
        type: "link",
        title: "Task",
      },
      {
        url: `${process.env.PUBLIC_URL}/social-app`,
        icon: <Zap />,
        title: "Social App",
        type: "link",
        bookmark: true,
      },

      {
        url: `${process.env.PUBLIC_URL}/todo-app/todo`,
        icon: <Clock />,
        type: "link",
        title: "To-Do",
      },
    ],
  },
  {
    className: "menu-box",
    menu: [
      {
        title: "Forms",
        icon: <FileText />,
        menu: [
          {
            title: "Form Controls",
            menu: [
              {
                title: "Form Validation",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-validation`,
              },
              {
                title: "Basic Input",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/baseInput`,
              },
              {
                title: "Checkbox & Radio",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/radio-checkbox`,
              },
              {
                title: "Input Groups",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/inputGroup`,
              },
              {
                title: "Mega Option",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/megaOptions`,
              },
            ],
          },
          {
            title: "Form Widgets",
            menu: [
              {
                title: "Datepicker",
                type: "link",
            bookmark:true,
                url: `${process.env.PUBLIC_URL}/form-widget/datepicker`,
              },
              {
                title: "Typeahead",
                type: "link",

                url: `${process.env.PUBLIC_URL}/form-widget/typeahead`,
              },
              {
                title: "Rangepicker",
                type: "link",

                url: `${process.env.PUBLIC_URL}/form-widget/rangepicker`,
              },
              {
                title: "Touchspin",
                type: "link",

                url: `${process.env.PUBLIC_URL}/form-widget/touchspin`,
              },
              {
                title: "Select2",
                type: "link",

                url: `${process.env.PUBLIC_URL}/form-widget/select`,
              },
              {
                title: "Switch",
                type: "link",

                url: `${process.env.PUBLIC_URL}/form-widget/switch`,
              },
              {
                title: "Clipboard",
                type: "link",

                url: `${process.env.PUBLIC_URL}/form-widget/clipboard`,
              },
            ],
          },
          {
            title: "Form Layout",
            menu: [
              {
                url: `${process.env.PUBLIC_URL}/form-layout/formDefault`,
                type: "link",
                title: "Form Default",
              },
              {
                url: `${process.env.PUBLIC_URL}/form-layout/formWizard`,
                type: "link",
                title: "Form Wizard",
              },
            ],
          },
        ],
      },
      {
        title: "Tables",
        icon: <Server />,
        menu: [
          {
            title: "React Strap Table",
            url: `${process.env.PUBLIC_URL}/table/reactstraptable`,
            type: "link",
          },
          {
            title: "Data Tables",
            type: "link",
            url: `${process.env.PUBLIC_URL}/table/datatable`,
          },
        ],
      },
    ],
  },
  {
    className: "menu-box",
    menu: [
      {
        title: "Ui-Kits",
        icon: <Box />,
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/typography`,
            title: "Typography",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/avatar`,
            title: "Avatars",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/helperclass`,
            title: "Helper-Classes",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/grid`,
            title: "Grid",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/tagsandpills`,
            title: "Tag & Pills",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/progress-bar`,
            title: "Progress",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/modal`,
            title: "Modal",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/alert`,
            title: "Alert",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/popover`,
            title: "Popover",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/tooltips`,
            title: "Tooltip",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/spinner`,
            title: "Spinners",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/dropdown`,
            title: "Dropdown",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/accordion`,
            title: "Accordion",
            type: "link",
          },
          {
            title: "Tabs",
            type: "sub",
            menu: [
              {
                title: "Bootstrap Tabs",
                type: "link",
                url: `${process.env.PUBLIC_URL}/ui-kits/tab-bootstrap`,
              },
              {
                title: "Line Tabs",
                type: "link",
                url: `${process.env.PUBLIC_URL}/ui-kits/tab-line`,
              },
            ],
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/shadow`,
            title: "Shadow",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/ui-kits/list`,
            title: "List",
            type: "link",
          },
        ],
      },
      {
        title: "Bonus Ui",
        type: "sub",
        icon: <FolderPlus />,
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`,
            type: "link",
            title: "Scrollable",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/treeview`,
            type: "link",
            title: "Tree",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/rating`,
            type: "link",
            title: "Rating",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/dropzone`,
            type: "link",
            title: "Dropzone",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/tourComponent`,
            type: "link",
            title: "Tour",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/sweetAlert`,
            type: "link",
            title: "SweetAlert",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/ribbons`,
            type: "link",
            title: "Ribbons",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/pagination`,
            type: "link",
            title: "Pagination",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/breadcrumb`,
            type: "link",
            title: "Breadcrumb",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/rangeSlider`,
            type: "link",
            title: "Range Slider",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/imageCropper`,
            type: "link",
            title: "Image Cropper",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/stickyNotes`,
            type: "link",
            title: "Sticky",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/dragNDropComp`,
            type: "link",
            title: "Drag and Drop",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/image-upload`,
            type: "link",
            title: "Upload",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/card/basicCards`,
            type: "link",
            title: "Basic Card",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/card/draggingCards`,
            type: "link",
            title: "Draggable Card",
          },
          {
            url: `${process.env.PUBLIC_URL}/bonus-ui/timelines/timeline1`,
            type: "link",
            title: "Timeline",
          },
        ],
      },
      {
        title: "Icons",
        icon: <Command />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/icons/flagIcons`,
            type: "link",
            title: "Flag Icon",
          },
          {
            url: `${process.env.PUBLIC_URL}/icons/fontAwsomeIcon`,
            type: "link",
            title: "Font awesome Icon",
          },
          {
            url: `${process.env.PUBLIC_URL}/icons/icoIcons`,
            type: "link",
            title: "Ico Icon",
          },
          {
            url: `${process.env.PUBLIC_URL}/icons/themifyIcons`,
            type: "link",
            title: "Themify Icon",
          },
          {
            url: `${process.env.PUBLIC_URL}/icons/featherIcons`,
            type: "link",
            title: "Feather Icon",
          },
          {
            url: `${process.env.PUBLIC_URL}/icons/weatherIcons`,
            type: "link",
            title: "Whether Icon",
          },
        ],
      },
      {
        title: "Buttons",
        icon: <Cloud />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/buttons/default-btn`,
            type: "link",
            title: "Default Style",
          },
          {
            url: `${process.env.PUBLIC_URL}/buttons/groupBtn`,
            type: "link",
            title: "Button Group",
          },
        ],
      },
      {
        title: "Charts",
        icon: <BarChart />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/charts/apexCharts`,
            type: "link",
            title: "Apex Chart",
            bookmark:true,

          },
          {
            url: `${process.env.PUBLIC_URL}/charts/googleChart`,
            type: "link",
            title: "Google Chart",
          },
          {
            url: `${process.env.PUBLIC_URL}/charts/chartJs`,
            type: "link",
            title: "Chartjs",
          },
          {
            url: `${process.env.PUBLIC_URL}/charts/chartistComponent`,
            type: "link",
            title: "Chartist",
          },
        ],
      },
    ],
  },
  {
    className: "menu-box",
    menu: [
      {
        url: `${process.env.PUBLIC_URL}/samplepage`,
        icon: <Layers />,
        title: "Sample Page",
        type: "sub",
      },
      {
        title: "Others",
        icon: <Layers />,
        type: "sub",
        menu: [
          {
            title: "Error Page",
            type: "sub",
            menu: [
              {
                title: "Error Page 1",
                type: "link",
                url: `${process.env.PUBLIC_URL}/error/error-page1`,
              },
              {
                title: "Error Page 2",
                type: "link",
                url: `${process.env.PUBLIC_URL}/error/error-page2`,
              },
              {
                title: "Error Page 3",
                type: "link",
                url: `${process.env.PUBLIC_URL}/error/error-page3`,
              },
              {
                title: "Error Page 4",
                type: "link",
                url: `${process.env.PUBLIC_URL}/error/error-page4`,
              },
              {
                title: "Error Page 5",
                type: "link",
                url: `${process.env.PUBLIC_URL}/error/error-page5`,
              },
            ],
          },
          {
            title: "Coming Soon",
            type: "sub",

            menu: [
              {
                title: "Coming Sample",
                type: "link",
                url: `${process.env.PUBLIC_URL}/coming/comingsimple`,
              },
              {
                title: "Coming with Bg-video",
                type: "link",
                url: `${process.env.PUBLIC_URL}/coming/comingbgvideo`,
              },
              {
                title: "Coming with Bg-Image",
                type: "link",
                url: `${process.env.PUBLIC_URL}/coming/comingbgimage`,
              },
            ],
          },
          {
            title: "Authentication",
            type: "sub",

            menu: [
              {
                title: "Login Simple",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/login-simple`,
              },
              {
                title: "Login With bg image",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/login-img`,
              },
              {
                title: "Login with image two",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/login-bg-img`,
              },
              {
                title: "Login with validation",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/login-validation`,
              },
              {
                title: "Login with tooltip",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/login-tooltip`,
              },
              {
                title: "Login with sweetaleart",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/login-sweetalert`,
              },
              {
                type: "link",
                title: "Register Simple",

                url: `${process.env.PUBLIC_URL}/authentication/register-simpleimg`,
              },
              {
                title: "Register with Bg image",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/register-bg-img`,
              },
              {
                title: "Register with Bg Video",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/register-video`,
              },
              {
                title: "Unlock User",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/unlock-user`,
              },
              {
                title: "Forgot Password",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/forget-pwd`,
              },
              {
                title: "Create Passward",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/create-pwd`,
              },
              {
                title: "Maintenance",
                type: "link",

                url: `${process.env.PUBLIC_URL}/authentication/maintenance`,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    className: "menu-box",
    menu: [
      {
        icon: <Image />,
        title: "Gallery",
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/gallery/imageGallery`,
            title: "Gallery Grid",
            type: "link",
          },
          {
            url: `${process.env.PUBLIC_URL}/gallery/imageWithDesc`,
            type: "link",
            title: "Gallery Grid  Desc",
          },
          {
            url: `${process.env.PUBLIC_URL}/gallery/mesonryGallery`,
            type: "link",
            title: "Masonry Gallery",
          },
          {
            url: `${process.env.PUBLIC_URL}/gallery/mesonryDesc`,
            type: "link",
            title: "Masonry With Desc",
          },
          {
            url: `${process.env.PUBLIC_URL}/gallery/imageHover`,
            type: "link",
            title: "Hover Effect",
          },
        ],
      },
      {
        icon: <Film />,
        title: "Blog",
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/blog/blogDetail`,
            type: "link",
            title: "Blog Details",
          },
          {
            url: `${process.env.PUBLIC_URL}/blog/blogSingle`,
            type: "link",
            title: "Blog Single",
          },
          {
            url: `${process.env.PUBLIC_URL}/blog/blogPost`,
            type: "link",
            title: "Add Post",
          },
        ],
      },
      {
        icon: <Package />,
        title: "Job Search",
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/jobSearch/cardView`,
            type: "link",
            title: "Cards View",
          },
          {
            url: `${process.env.PUBLIC_URL}/jobSearch/job-list`,
            type: "link",
            title: "List View",
          },
          {
            url: `${process.env.PUBLIC_URL}/jobSearch/job-detail`,
            type: "link",
            title: "Job Details",
          },
          {
            url: `${process.env.PUBLIC_URL}/jobSearch/job-apply`,
            type: "link",
            title: "Apply",
          },
        ],
      },
      {
        icon: <Radio />,
        title: "Learning",
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/learning/learning-list`,
            type: "link",
            title: "Learning List",
          },
          {
            url: `${process.env.PUBLIC_URL}/learning/learning-detail`,
            type: "link",
            title: "Detail Course",
          },
        ],
      },
      {
        title: "Maps",
        icon: <Map />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/map/googleMap`,
            type: "link",
            title: "Google Maps",
          },
          {
            url: `${process.env.PUBLIC_URL}/map/pigeonMap`,
            type: "link",
            title: "Pigeon Maps",
          },
        ],
      },
      {
        title: "Editor",
        icon: <Edit />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/editor/ckEditor`,
            type: "link",
            title: "CK  Editor",
          },
          {
            url: `${process.env.PUBLIC_URL}/editor/mdeEditor`,
            type: "link",
            title: "MDE Editor",
          },
          {
            url: `${process.env.PUBLIC_URL}/editor/acecodeeditor`,
            type: "link",
            title: "ACE code editor",
          },
        ],
      },
      {
        url: `${process.env.PUBLIC_URL}/faq`,
        icon: <HelpCircle />,
        title: "FAQ",
        type: "link",
      },
      {
        title: "knowledgebase",
        icon: <Sunrise />,
        type: "sub",
        menu: [
          {
            url: `${process.env.PUBLIC_URL}/knowledgebase/knowledgebase`,
            type: "link",
            title: "knowledgebase",
          },
          {
            url: `${process.env.PUBLIC_URL}/knowledgebase/KnowledgeCategory`,
            type: "link",
            title: "KnowledgeCategory",
          },
          {
            url: `${process.env.PUBLIC_URL}/knowledgebase/KnowledgeDetailContain`,
            type: "link",
            title: "KnowledgeDetail",
          },
        ],
      },
      {
        url: `${process.env.PUBLIC_URL}/support-ticket`,
        icon: <Users />,
        type: "link",
        title: "Support Ticket",
      },
    ],
  },
];


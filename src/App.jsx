import React from "react";
import Routers from "./Route";
import CustomizerProvider from "./Helper/Customizer/CustomizerProvider";
import ProjectProvider from "./Helper/Project/ProjectProvider";
import FilterProvider from "./Helper/filter/FilterProvider";
import CartProvider from "./Helper/cart/CartProvider";
import ProductProvider from "./Helper/product/ProductProvider";
import WishListProvider from "./Helper/wishlist/WishProvider";
import EmailProvider from "./Helper/email/EmailProvider";
import ChatProvider from "./Helper/chat-app/ChatProvider";
import BookmarkProvider from "./Helper/bookmark/BookmarkProvider";
import ContactProvider from "./Helper/Contact/ContactProvider";
import TaskProvider from "./Helper/task-app/TaskProvider";
import TodoProvider from "./Helper/Todo/TodoProvider";
import TableProvider from "./Helper/Table/TableProvider";
import Leatning from "./Helper/Leatning/LearningProvider";
import FAQProvider from "./Helper/Faq/FaqProvider";
import JobSearchProvider from "./Helper/JobSearch/JobSearchProvider";
import GalleryProvider from "./Helper/Gallery/GalleryProvider";
import GoogleChartProvider from "./Helper/GoogleChart/GoogleChartProvider";
import ChartistProvider from "./Helper/Chartist/ChartistProvider";
import AnimationThemeProvider from "./Helper/AnimationTheme/AnimationThemeProvider";
import CRMProvider from "./Helper/CRM/CRMProvider";

const App = () => {
  return (
    <div className="App">
      <CRMProvider>
        <CustomizerProvider>
          <WishListProvider>
            <FilterProvider>
              <CartProvider>
                <ProjectProvider>
                  <ProductProvider>
                    <ContactProvider>
                      <EmailProvider>
                        <ChatProvider>
                          <TaskProvider>
                            <TodoProvider>
                              <TableProvider>
                                <Leatning>
                                  <FAQProvider>
                                    <JobSearchProvider>
                                      <GalleryProvider>
                                        <GoogleChartProvider>
                                          <ChartistProvider>
                                            <BookmarkProvider>
                                              <AnimationThemeProvider>
                                                {" "}
                                                <Routers />
                                              </AnimationThemeProvider>{" "}
                                            </BookmarkProvider>
                                          </ChartistProvider>
                                        </GoogleChartProvider>
                                      </GalleryProvider>
                                    </JobSearchProvider>
                                  </FAQProvider>
                                </Leatning>
                              </TableProvider>
                            </TodoProvider>
                          </TaskProvider>
                        </ChatProvider>
                      </EmailProvider>
                    </ContactProvider>
                  </ProductProvider>
                </ProjectProvider>
              </CartProvider>
            </FilterProvider>
          </WishListProvider>
        </CustomizerProvider>
      </CRMProvider>
    </div>
  );
};

export default App;

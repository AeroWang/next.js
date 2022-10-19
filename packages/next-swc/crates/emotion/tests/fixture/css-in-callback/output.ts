import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
const stylesInCallback = (props: any)=>/*#__PURE__*/ css({
        color: 'red',
        background: 'yellow',
        width: `${props.scale * 100}px`
    }, "label:stylesInCallback", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRSJ9 */");
const styles = /*#__PURE__*/ css({
    color: 'red',
    width: '20px'
}, "label:styles", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZSJ9 */");
const styles2 = /*#__PURE__*/ css("color:red;width:20px;", "styles2", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmdCIn0= */");
const DivContainer = /*#__PURE__*/ styled("div", {
    target: "ekie5mj0",
    label: "DivContainer"
})({
    background: 'red'
}, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnFCIn0= */");
const DivContainer2 = /*#__PURE__*/ styled("div", {
    target: "ekie5mj1",
    label: "DivContainer2"
})("background:red;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnNCIn0= */");
const ContainerWithOptions = /*#__PURE__*/ styled('div', {
    shouldForwardProp: (propertyName: string)=>!propertyName.startsWith('$'),
    target: "ekie5mj2",
    label: "ContainerWithOptions"
})("color:hotpink;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QjZCIn0= */");
const SpanContainer = /*#__PURE__*/ styled('span', {
    target: "ekie5mj3",
    label: "SpanContainer"
})({
    background: 'yellow'
}, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3NCIn0= */");
export const DivContainerExtended = /*#__PURE__*/ styled(DivContainer, {
    target: "ekie5mj4",
    label: "DivContainerExtended"
})("/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29DIn0= */");
export const DivContainerExtended2 = /*#__PURE__*/ styled(DivContainer, {
    target: "ekie5mj5",
    label: "DivContainerExtended2"
})({}, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q3FDIn0= */");
const Container = /*#__PURE__*/ styled('button', {
    target: "ekie5mj6",
    label: "Container"
})("background:red;", stylesInCallback, " ", ()=>/*#__PURE__*/ css({
        background: 'red'
    }, "label:Container", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ0kifQ== */"), "  color:yellow;font-size:12px;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2tCIn0= */");
const Container2 = /*#__PURE__*/ styled("div", {
    target: "ekie5mj7",
    label: "Container2"
})("background:red;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRG1CIn0= */");
export class SimpleComponent extends PureComponent {
    render() {
        return /*#__PURE__*/ _jsxs(Container, {
            css: /*#__PURE__*/ css("color:hotpink;", "Container2", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RGEifQ== */"),
            children: [
                /*#__PURE__*/ _jsx(Global, {
                    styles: [
                        css("html,body{padding:3rem 1rem;margin:0;background:papayawhip;min-height:100%;font-family:Helvetica,Arial,sans-serif;font-size:24px;}"),
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQudHMiLCJzb3VyY2VzIjpbImlucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHN0eWxlc0luQ2FsbGJhY2sgPSAocHJvcHM6IGFueSkgPT5cbiAgY3NzKHtcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgYmFja2dyb3VuZDogJ3llbGxvdycsXG4gICAgd2lkdGg6IGAke3Byb3BzLnNjYWxlICogMTAwfXB4YCxcbiAgfSlcblxuY29uc3Qgc3R5bGVzID0gY3NzKHtcbiAgY29sb3I6ICdyZWQnLFxuICB3aWR0aDogJzIwcHgnLFxufSlcblxuY29uc3Qgc3R5bGVzMiA9IGNzc2BcbiAgY29sb3I6IHJlZDtcbiAgd2lkdGg6IDIwcHg7XG5gXG5cbmNvbnN0IERpdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAncmVkJyxcbn0pXG5cbmNvbnN0IERpdkNvbnRhaW5lcjIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZWQ7XG5gXG5cbmNvbnN0IENvbnRhaW5lcldpdGhPcHRpb25zID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+ICFwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnJCcpLFxufSlgXG4gIGNvbG9yOiBob3RwaW5rO1xuYFxuXG5jb25zdCBTcGFuQ29udGFpbmVyID0gc3R5bGVkKCdzcGFuJykoe1xuICBiYWNrZ3JvdW5kOiAneWVsbG93Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZCA9IHN0eWxlZChEaXZDb250YWluZXIpYGBcbmV4cG9ydCBjb25zdCBEaXZDb250YWluZXJFeHRlbmRlZDIgPSBzdHlsZWQoRGl2Q29udGFpbmVyKSh7fSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdidXR0b24nKWBcbiAgYmFja2dyb3VuZDogcmVkO1xuICAke3N0eWxlc0luQ2FsbGJhY2t9XG4gICR7KCkgPT5cbiAgICBjc3Moe1xuICAgICAgYmFja2dyb3VuZDogJ3JlZCcsXG4gICAgfSl9XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29udGFpbmVyMiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHJlZDtcbmBcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUNvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+aGVsbG88L3NwYW4+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxTaW1wbGVDb21wb25lbnQgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRVMifQ== */"
                    ]
                }),
                /*#__PURE__*/ _jsx("span", {
                    children: "hello"
                })
            ]
        });
    }
}
ReactDOM.render(/*#__PURE__*/ _jsx(SimpleComponent, {}), document.querySelector('#app'));
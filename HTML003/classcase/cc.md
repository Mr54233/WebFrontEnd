# 分析设计

1. 文件夹结构

    - public : 静态资源
        - css
        - js
        - image
    - views : 模板文件
        - admin : 后台子系统文件夹
            - layout.art : 骨架模板
            - users : 用户操作的子文件夹
                - user_list.art : 列表
            - categories
                - category_list.art : 列表
                - category_add.art : 新增
        - home : 前台子系统

2. 地址系统设计

-   /admin/ : 后台子系统的地址的前缀
    -   /admin/user/list : 用户列表
    -   /admin/user/delete : 删除地址
-   / : 前台子系统的地址的前缀
    -   /index : 首页
    -   /login : 登录

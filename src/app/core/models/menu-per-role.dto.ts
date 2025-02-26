export interface MenuDetailDto {
    id: number;
    label: string;
    routerLink: string;
    icon: string;
    parentId?: number;
    items?: MenuDetailDto[];
  }
  
  export interface MenuPerRoleDto {
    roleId: number;
    menus: MenuDetailDto[];
  }
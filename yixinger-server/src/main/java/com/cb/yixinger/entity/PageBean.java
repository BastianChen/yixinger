package com.cb.yixinger.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
 * @Description: 分页bean
 * @author: YFZX-CB-1784 ChenBen
 * @create: 2018-11-27 17:17
 **/
@ApiModel(value = "分页bean")
@Data
public class PageBean<T> {
    @ApiModelProperty(value = "当前页")
    private Integer currentPage = 1;
    @ApiModelProperty(value = "每页显示的总条数")
    private Integer pageSize = 10;
    @ApiModelProperty(value = "总条数")
    private Integer totalNum;
    @ApiModelProperty(value = "是否有下一页")
    private Integer isMore;
    @ApiModelProperty(value = "总页数")
    private Integer totalPage;
    @ApiModelProperty(value = "开始索引")
    private Integer startIndex;
    @ApiModelProperty(value = "分页结果")
    private List<T> items;

    public PageBean() {
        super();
    }

    public PageBean(Integer currentPage, Integer pageSize, Integer totalNum) {
        super();
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.totalNum = totalNum;
        this.totalPage = (this.totalNum + this.pageSize - 1) / this.pageSize;
        this.startIndex = (this.currentPage - 1) * this.pageSize;
        this.isMore = this.currentPage >= this.totalPage ? 0 : 1;
    }
}

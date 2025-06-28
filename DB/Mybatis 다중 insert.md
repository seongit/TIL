insert into 테이블명
<foreach collection="fileList" item="item" separator=",">
  (#{param1}, #{param2}, #{item.name})
</foreach>

insert into 테이블명
<foreach collection="fileList" item="item" open="("  separator="," close ")">
#{param1}, #{param2}, #{item.name}
</foreach>

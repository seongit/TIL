MERGE문장은 우리가 흔히 사용하는 매우 강력한 UPDATE + INSERT + DELETE문장의 집합체입니다.

  INTO  : data가 update되거나 insert될 table name (emp_history는 target table)
   USING : 대상 table의 data와 비교한 후 update또는 insert할 때 사용할 data의 source (emp는 source table)
   ON    : update나 insert할 condition으로, 해당 condition을 만족하는 row가 있으면 WHEN MATCHED
           이하를 실행하게 되고, 없으면 WHEN NOT METCHED 이하를 실행합니다.
   WHEN MATCHED : ON의 조건이 TRUE인 row에 수행할 내용
   WHEN NOT MATCHED : ON의 조건에 맞는 row가 없을 때 수행할 내용
   * update, insert 후에 table명이 없다. -> 위에서 정의한 target table에 update, insert하는것이기 때문입니다.
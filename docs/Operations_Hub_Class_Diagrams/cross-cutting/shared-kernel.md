# Shared Kernel Class Diagram

## 1. Mục tiêu

Shared Kernel chỉ chứa các khái niệm thật sự dùng chung. Không đưa quy tắc riêng của một mô-đun vào đây vì sẽ tạo phụ thuộc ngược và làm mờ bounded context.

## 2. Class Diagram

```mermaid
classDiagram
direction LR

class BaseEntity {
  <<abstract>>
  +id
  +createdAt
  +updatedAt
}

class TenantOwnedEntity {
  <<abstract>>
  +tenantId
}

class ActorContext {
  <<value object>>
  +userId
  +membershipId
  +tenantId
  +correlationId
}

class FileObject {
  <<entity>>
  +id
  +tenantId
  +storageKey
  +mediaType
  +size
  +checksum
  +createdByMembershipId
}

class Money {
  <<value object>>
  +amount
  +currency
}

class DateRange {
  <<value object>>
  +start
  +end
  +contains()
  +overlaps()
}

class AuditMetadata {
  <<value object>>
  +actorUserId
  +actorMembershipId
  +correlationId
  +ipAddress
}

class DomainEvent {
  <<abstract>>
  +eventId
  +tenantId
  +occurredAt
  +eventType
}

BaseEntity <|-- TenantOwnedEntity
TenantOwnedEntity <|-- FileObject
ActorContext --> AuditMetadata
Money ..> FinanceTransaction
DateRange ..> EvaluationCycle
DateRange ..> Meeting
DomainEvent ..> AuditEvent
```

## 3. Cảnh báo thiết kế

- Không tạo một `CommonService` chứa mọi nghiệp vụ.
- Không dùng `tenantId` từ client mà không đối chiếu membership.
- `FileObject` phải duy trì tenant boundary tương tự dữ liệu nguồn.
- Value object phải được kiểm tra hợp lệ tại thời điểm khởi tạo.
